import { useState, useRef } from "react";
import * as Tone from "tone";
import { useInterval } from "./useInterval";
import type { MidiFile } from "./MidiFile";

export type Preview = {
  track: MidiFile | null;
  playing: boolean;
  progressMs: number;
  durationMs: number;
};

const synth = new Tone.Synth({
  oscillator: { type: "square" },
  envelope: { attack: 0, decay: 0, sustain: 1, release: 0.001 },
}).toDestination();

synth.volume.value = -25;

function playNote(frequency: number, duration: number) {
  return (time: number) => {
    synth.triggerAttackRelease(frequency, duration - 5 / 1000, time);
  };
}

export function usePreview() {
  const [willPlay, setWillPlay] = useState(false);
  const [preview, setPreview] = useState<Preview>({
    track: null,
    playing: false,
    progressMs: 0,
    durationMs: 0,
  });

  const previewRef = useRef(preview);
  previewRef.current = preview;

  function setPreviewTrack(track: MidiFile, autoPlay = false) {
    const lastNote = track
      .getGcode()
      .schedule.reduce((a, b) => (a.time > b.time ? a : b));
    const durationMs = (lastNote.time + lastNote.duration) * 1000;

    // Stop and clear previous schedules
    Tone.getTransport().stop();
    Tone.getTransport().cancel();

    track.getGcode().schedule.forEach((note) => {
      Tone.getTransport().schedule(
        playNote(note.frequency, note.duration),
        note.time
      );
    });

    setWillPlay(true);

    setPreview({
      track,
      playing: false,
      progressMs: 0,
      durationMs,
    });

    if (autoPlay) {
      setTimeout(() => {
        if (previewRef.current.track?.id === track.id) {
          startPreviewTrack();
          setWillPlay(false);
        }
      }, 100);
    }
  }

  function startPreviewTrack() {
    if (previewRef.current.playing) return;

    Tone.start();
    Tone.getTransport().start();

    const stopTime =
      (previewRef.current.durationMs - previewRef.current.progressMs) / 1000;

    Tone.getTransport().scheduleOnce(() => {
      stopPreviewTrack();
    }, stopTime);

    setPreview((prev) => ({ ...prev, playing: true }));
  }

  function stopPreviewTrack() {
    if (!previewRef.current.playing) return;

    Tone.getTransport().stop();
    setPreview((prev) => ({ ...prev, playing: false, progressMs: 0 }));
  }

  function togglePreviewTrack() {
    if (previewRef.current.playing) {
      stopPreviewTrack();
    } else {
      startPreviewTrack();
    }
  }

  useInterval(() => {
    if (Tone.getTransport().state === "started") {
      setPreview((prev) => ({
        ...prev,
        progressMs: Tone.now() * 1000,
      }));
    }
  }, 100);

  function cancelPreview() {
    Tone.getTransport().stop();
    Tone.getTransport().cancel();
    setPreview({ ...preview, playing: false, progressMs: 0 });
  }

  return {
    preview: { ...preview, playing: preview.playing || willPlay },
    setPreviewTrack,
    togglePreviewTrack,
    cancelPreview,
  };
}
