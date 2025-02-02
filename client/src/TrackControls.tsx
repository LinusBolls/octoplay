import * as Tone from "tone";
import { useEffect, useRef, useState } from "react";

import { MidiFile } from "./MidiFile";
import { formatFileSize, getHumanReadableDuration } from "./util";
import type { GcodeToMidiOptions } from "./getGcodeFromMidi";
import { GcodeCommand } from "./GcodeCommand";
import { useInterval } from "./useInterval";

const synth = new Tone.Synth({
  oscillator: {
    type: "square",
  },
  envelope: {
    attack: 0,
    decay: 0,
    sustain: 1,
    release: 0.001,
  },
}).toDestination();

synth.volume.value = -25;

function FilesBrowser({
  files,
  selectedId,
  onSelect,
}: {
  files: MidiFile[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      {files.map((i) => {
        const isActive = selectedId === i.id;
        return (
          <div
            onClick={() => onSelect(i.id)}
            key={i.id}
            style={{
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
              padding: "5px",
              background: isActive ? "rgb(245, 245, 245" : undefined,
            }}
          >
            <div>{i.fileName}</div>
            <small className="muted">{formatFileSize(i.fileSize)}</small>
            <small className="muted">
              {getHumanReadableDuration(i.midiDurationMs)}
            </small>
            <small className="muted">{i.tracks.length} tracks</small>
          </div>
        );
      })}
    </div>
  );
}

function FileUpload({ onInput }: { onInput: (files: FileList) => void }) {
  return (
    <span
      className="btn btn-primary fileinput-button span6"
      style={{ marginBottom: "10px" }}
    >
      <i className="fas fa-upload"></i>
      <span className="hidden-tablet UICHideTablet">Upload MIDI</span>
      <input
        onInput={(e) => {
          if (e.currentTarget.files) onInput(e.currentTarget.files);
        }}
        accept=".mid"
        type="file"
        className="fileinput-button"
        multiple
      />
    </span>
  );
}

function playNote(frequency: number, duration: number) {
  // Simulate a startup time of 5ms
  return (time: number) => {
    synth.triggerAttackRelease(frequency, duration - 5 / 1000, time);
  };
}

export function OctoplayTab() {
  const [playbackOptions, setPlaybackOptions] = useState<GcodeToMidiOptions>({
    useG4: false,
    speed: 1,
    tracks: [{ enabled: true }],
  });
  const [files, setFiles] = useState<MidiFile[]>([]);
  const [activeFileId, setActiveFileId] = useState<string | null>(null);

  // TODO: implement chunked playback
  const [gcodeChunkMs, setGcodeChunkMs] = useState<number | null>(null);

  const activeFile = files.find((i) => i.id === activeFileId);

  const [playback, setPlayback] = useState({ playing: false });

  const gcodeCommand = useRef<GcodeCommand | null>(null);

  useInterval(() => {
    if (gcodeCommand.current) {
      gcodeCommand.current.tick();
      setPlayback({ playing: gcodeCommand.current.state === "PLAYING" });
    }
  }, 100);

  useEffect(() => {
    for (const note of activeFile?.getGcode(playbackOptions).schedule ?? []) {
      Tone.getTransport().schedule(
        playNote(note.frequency, note.duration),
        note.time
      );
    }

    // clear previous scheduled tones
    Tone.getTransport().stop();
    Tone.getTransport().cancel();

    gcodeCommand.current = new GcodeCommand(
      activeFile?.getGcode(playbackOptions).gcode!,
      gcodeChunkMs
    );
    setPlayback({ playing: false });
  }, [activeFileId, playbackOptions, gcodeChunkMs]);

  function togglePreview() {
    Tone.getTransport().toggle();
  }

  function skipPreviewToStart() {
    Tone.getTransport().stop();
  }

  function togglePlayback() {
    if (!gcodeCommand.current) return;

    if (playback.playing) {
      gcodeCommand.current.pause();
    } else {
      gcodeCommand.current.unpause();
    }
    setPlayback((prev) => ({ playing: !prev.playing }));
  }

  function skipPlaybackToStart() {
    if (!gcodeCommand.current) return;

    gcodeCommand.current.goToBeginning();
  }

  const preview = {
    playing: Tone.getTransport().state === "started",
  };

  async function onMidiUpload(rawFiles: FileList) {
    const newMidifiles = await Promise.all(
      Array.from(rawFiles).map((i) => MidiFile.fromFile(i))
    );
    setFiles((prev) => [...prev, ...newMidifiles]);

    if (!activeFile) setActiveFileId(newMidifiles[0]?.id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <FilesBrowser
        files={files}
        selectedId={activeFileId}
        onSelect={setActiveFileId}
      />
      <FileUpload onInput={onMidiUpload} />
      {activeFile && (
        <TrackControls
          midi={activeFile}
          preview={preview}
          togglePreview={togglePreview}
          skipPreviewToStart={skipPreviewToStart}
          playbackOptions={playbackOptions}
          onPlaybackOptionsChange={setPlaybackOptions}
          playback={{
            ...playback,
            chunkIntervalMs: gcodeChunkMs,
            chunked: gcodeChunkMs != null,
          }}
          togglePlayback={togglePlayback}
          skipPlaybackToStart={skipPlaybackToStart}
        />
      )}
    </div>
  );
}

export function TrackControls({
  midi,
  playbackOptions,
  onPlaybackOptionsChange,
  preview,
  togglePreview,
  skipPreviewToStart,
  playback,
  togglePlayback,
  skipPlaybackToStart,
}: {
  midi: MidiFile;
  playbackOptions: GcodeToMidiOptions;
  onPlaybackOptionsChange: (options: GcodeToMidiOptions) => void;
  preview: { playing: boolean };
  togglePreview: () => void;
  skipPreviewToStart: () => void;
  playback: {
    playing: boolean;
    chunkIntervalMs: number | null;
    chunked: boolean;
  };
  togglePlayback: () => void;
  skipPlaybackToStart: () => void;
}) {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {midi.tracks?.map((track, idx) => {
          const trackSettings = playbackOptions.tracks?.[idx];

          return (
            <label key={idx} className="checkbox">
              <input
                type="checkbox"
                checked={trackSettings?.enabled}
                onChange={(e) => {
                  const newTracks = [...playbackOptions.tracks!];
                  newTracks[idx] = {
                    ...newTracks[idx],
                    enabled: e.target.checked,
                  };
                  onPlaybackOptionsChange({
                    ...playbackOptions,
                    tracks: newTracks,
                  });
                }}
              />
              <span>
                Track {idx + 1}: {track.name} - {track.notes.length} notes
              </span>
            </label>
          );
        })}
        <label>
          Speed multiplier:
          <input
            type="number"
            step="0.01"
            min="0.01"
            value={playbackOptions.speed!}
            onChange={(e) =>
              onPlaybackOptionsChange({
                ...playbackOptions,
                speed: parseFloat(e.target.value),
              })
            }
          />
        </label>
      </div>
      <div style={{ display: "flex" }}>
        <button className="btn span4" onClick={togglePreview}>
          <i
            className={"fas " + (preview.playing ? "fa-pause" : "fa-play")}
          ></i>
          <span>Play/Pause Preview</span>
        </button>
        <button className="btn span4" onClick={skipPreviewToStart}>
          <i className="fas fa-step-backward"></i>
          <span>Restart Preview</span>
        </button>
        <button
          className="btn span4"
          onClick={togglePlayback}
          disabled={playback.playing && !playback.chunked}
        >
          <i
            className={"fas " + (playback.playing ? "fa-pause" : "fa-play")}
          ></i>
          <span>Play/Pause Playback</span>
        </button>
        <button className="btn span4" onClick={skipPlaybackToStart}>
          <i className={"fas fa-step-backward"}></i>
          <span>Restart Playback</span>
        </button>
      </div>
      <br />
      <label className="checkbox">
        <input
          type="checkbox"
          checked={playbackOptions.useG4}
          onChange={(e) =>
            onPlaybackOptionsChange({
              ...playbackOptions,
              useG4: e.target.checked,
            })
          }
        />
        <span>Add G4 after M300 (required for Duet)</span>
      </label>
      <br />
      <div>
        {getHumanReadableDuration(midi.getGcode(playbackOptions).durationMs)}
      </div>
      <br />
      <textarea
        rows={10}
        cols={100}
        style={{ width: "100%", resize: "vertical" }}
        value={midi.getGcode(playbackOptions).gcode}
      />
    </div>
  );
}
