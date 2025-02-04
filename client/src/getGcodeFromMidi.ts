import { Track } from "@tonejs/midi";

import { getGcodeRunDurationMs, noteToFreq } from "./util";

type ScheduleItem = {
  time: number;
  frequency: number;
  duration: number;
};

export type GcodeToMidiOptions = {
  useG4?: boolean;
  speed?: number;
  tracks?: { enabled: boolean }[];
};

/**
 * @param options.useG4 - Whether to use G4 pauses between notes (default: false). useful for Duet firmware.
 * @param options.speed - Speed multiplier for the MIDI (default: 1).
 * @param options.tracks - Array of objects with an enabled boolean property for each track in the MIDI. If a track is disabled, it will be ignored. If the tracks option is not provided, only the first track will be used.
 */
export function getGcodeFromMidi(
  tracks: Track[],
  options?: GcodeToMidiOptions
) {
  const useG4 = options?.useG4 ?? false;
  const speed = options?.speed ?? 1;
  const tracksSettings = options?.tracks ?? [{ enabled: true }];

  const track: {
    notes: (Track["notes"] & any)[];
  } = {
    notes: [],
  };

  // Merge note arrays from selected tracks
  for (let i = 0; i < tracks.length; i++) {
    if (tracksSettings[i]?.enabled ?? false) {
      let currTrack = tracks[i].notes;

      // If percussion, add a percussion flag to note
      if (tracks[i].instrument.percussion) {
        currTrack.forEach((note) => {
          // @ts-expect-error todo: fix note typing
          note.percussion = true;
        });
      }
      track.notes = track.notes.concat(currTrack as Track["notes"] & any[]);
    }
  }

  // Sort notes by start time
  track.notes.sort((a, b) => a.time - b.time);

  const tempoMultiplier = 1 / Math.max(speed, 0.01);

  let curr = 0;
  const gcode = [];

  let schedule: ScheduleItem[] = [];

  while (curr < track.notes.length) {
    // Keep the highest non-percussion note if multiple occur at the same time
    let highestCurrNote = track.notes[curr].percussion
      ? -1
      : track.notes[curr].midi;
    let duration = track.notes[curr].duration;
    while (
      curr + 1 < track.notes.length &&
      track.notes[curr].time === track.notes[curr + 1].time
    ) {
      curr++;
      if (
        track.notes[curr].midi > highestCurrNote &&
        !track.notes[curr].percussion
      ) {
        duration = track.notes[curr].duration;
      }

      highestCurrNote = track.notes[curr].percussion
        ? highestCurrNote
        : Math.max(highestCurrNote, track.notes[curr].midi);
    }

    // Default to 20ms, 100hz note to simulate percussion
    const frequency =
      highestCurrNote === -1 ? 100 : noteToFreq(highestCurrNote);

    duration = highestCurrNote === -1 ? 20 / 1000 : duration;

    const time = track.notes[curr].time;
    const nextNoteTime =
      curr + 1 < track.notes.length
        ? track.notes[curr + 1].time
        : duration + time;

    // If this note overlaps the next note, cut the current note off
    let trimmedDuration = Math.min(nextNoteTime - time, duration);

    const pauseDuration = nextNoteTime - time - trimmedDuration;

    // Marlin doesn't seem to deal with very short pauses accurately, so merge short pauses with the previous note.
    // May need tuning
    const minDuration = 20 / 1000;

    if (pauseDuration < minDuration) {
      trimmedDuration += pauseDuration;
    }
    // Write an M300 to play a note with the calculated pitch and duration
    gcode.push(
      `M300 P${Math.round(
        trimmedDuration * 1000 * tempoMultiplier
      )} S${Math.round(frequency)}`
    );

    // Duet firmware needs G4 pauses between notes
    if (useG4) {
      gcode.push(`G4 P${Math.round(trimmedDuration * 1000 * tempoMultiplier)}`);
    }

    schedule.push({
      time: time * tempoMultiplier,
      frequency,
      duration: trimmedDuration * tempoMultiplier,
    });

    // If the current note is released before the start of the next note, insert a pause
    if (pauseDuration >= minDuration) {
      gcode.push(
        `M300 P${Math.round(pauseDuration * tempoMultiplier * 1000)} S0`
      );
      if (useG4) {
        gcode.push(`G4 P${Math.round(pauseDuration * tempoMultiplier * 1000)}`);
      }
    }
    curr++;
  }
  const gcodeStr = gcode.join("\n");

  const durationMs = getGcodeRunDurationMs(gcodeStr);

  return {
    schedule,
    durationMs,
    gcode: gcodeStr,
  };
}
