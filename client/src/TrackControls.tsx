import * as Tone from "tone";
import { useCallback, useEffect, useRef, useState } from "react";

import { MidiFile } from "./MidiFile";
import {
  formatDuration,
  formatFileSize,
  getHumanReadableDuration,
} from "./util";
import { type GcodeToMidiOptions } from "./getGcodeFromMidi";
import { GcodeCommand } from "./GcodeCommand";
import { useInterval } from "./useInterval";
import { deleteMIDIFile, getAllMIDIFiles, storeMIDIFile } from "./storage";
import { usePreview, type Preview } from "./usePreview";

const FLOATING_UPLOAD_BUTTON = false;

function FilesBrowser({
  preview,
  files,
  selectedId,
  onSelect,
  onDeleteEntry,
  onRenameEntry,
  onDownloadEntry,
  onUpload,
  onCopyGcode,
  onTogglePlayback,

  onCancelPreview,
}: {
  preview: Preview;
  files: MidiFile[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onDeleteEntry: (id: string) => void;
  onRenameEntry: (id: string, name: string) => void;
  onDownloadEntry: (id: string) => void;
  onUpload: (files: FileList) => void;
  onCopyGcode: (id: string) => void;
  onTogglePlayback: (id: string) => void;

  onCancelPreview: () => void;
}) {
  return (
    <div
      className="accordion-inner"
      style={{ position: "relative", boxSizing: "border-box" }}
    >
      {preview.playing && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "100%",
            bottom: 0,
            left: 0,
            zIndex: 1,

            padding: "5px",

            boxSizing: "border-box",
          }}
        >
          <div
            className="accordion-group"
            style={{
              display: "flex",

              background: "white",

              padding: "5px",

              width: "100%",
            }}
          >
            {/* TODO: start/stop button here */}
            {preview.track?.fileName || <i>Unnamed File</i>}
            <small className="muted" style={{ marginLeft: "0.5rem" }}>
              {getHumanReadableDuration(
                preview.durationMs - preview.progressMs
              )}
            </small>
            <button
              className="btn btn-mini"
              title="Cancel preview"
              aria-label="Cancel preview"
              role="link"
              onClick={(e) => {
                e.stopPropagation();
                onCancelPreview();
              }}
              style={{ marginLeft: "auto" }}
            >
              <i className="fas fa-x"></i>
            </button>
          </div>
        </div>
      )}
      {FLOATING_UPLOAD_BUTTON && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            top: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <FileUpload onInput={onUpload} />
        </div>
      )}
      <div style={{ overflowY: "scroll", height: "32rem" }}>
        {files
          .sort((a, b) => a.fileName.localeCompare(b.fileName))
          .map((i) => {
            const isActive = selectedId === i.id;
            return (
              <div
                onClick={i.isPlayable ? () => onSelect(i.id) : undefined}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  padding: "5px",
                  gap: "5px",

                  borderBottom: "1px solid rgb(221, 221, 221)",
                  background: isActive ? "rgb(245, 245, 245" : undefined,
                  cursor: i.isPlayable ? "pointer" : "default",
                }}
                title={i.isPlayable ? undefined : "File not playable"}
              >
                {i.isPlayable ? (
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "30px",
                      height: "30px",
                      margin: 0,

                      border: "none",
                      background: "none",
                      boxShadow: "none",

                      outline: "none",
                    }}
                    title="Play Preview"
                    className="btn span4"
                    disabled={!i.isPlayable}
                    onClick={(e) => {
                      e.stopPropagation();
                      onTogglePlayback(i.id);
                    }}
                  >
                    <i
                      className={
                        "fas " +
                        (preview.playing && preview.track?.id === i.id
                          ? "fa-pause"
                          : "fa-play")
                      }
                    ></i>
                  </button>
                ) : (
                  <div style={{ width: "30px" }} />
                )}

                <div
                  key={i.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",

                    opacity: i.isPlayable ? undefined : 0.5,
                  }}
                >
                  <div>{i.fileName || <i>Unnamed File</i>}</div>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <small className="muted">
                      {getHumanReadableDuration(i.midiDurationMs)}
                    </small>
                    <small className="muted">•</small>
                    <small className="muted">
                      {formatFileSize(i.fileSize)}
                    </small>
                    <small className="muted">•</small>
                    <small className="muted">{i.tracks.length} tracks</small>
                  </div>
                </div>
                <div
                  className="btn-group"
                  style={{ position: "absolute", bottom: "5px", right: "5px" }}
                >
                  <button
                    disabled={!i.isPlayable}
                    className="btn btn-mini"
                    title="Copy G-Code"
                    aria-label="Copy G-Code"
                    role="link"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCopyGcode(i.id);
                    }}
                  >
                    <i className="fas fa-code"></i>
                  </button>
                  <button
                    className="btn btn-mini"
                    title="Download"
                    aria-label="Download"
                    role="link"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDownloadEntry(i.id);
                    }}
                  >
                    <i className="fas fa-download"></i>
                  </button>
                  {/* <button
                    className="btn btn-mini"
                    title="Rename"
                    aria-label="Rename"
                    role="link"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRenameEntry(i.id, i.fileName);
                    }}
                  >
                    <i className="fas fa-cut"></i>
                  </button> */}
                  <button
                    className="btn btn-mini"
                    title="Remove"
                    aria-label="Remove"
                    role="link"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteEntry(i.id);
                    }}
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function FileUpload({ onInput }: { onInput: (files: FileList) => void }) {
  return (
    <span
      className="btn btn-primary fileinput-button span6"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",

        height: "auto",

        whiteSpace: "nowrap",
      }}
    >
      <i className="fas fa-upload"></i>
      <span className="hidden-tablet UICHideTablet">Upload MIDI</span>
      <div>
        <input
          onInput={(e) => {
            if (e.currentTarget.files) onInput(e.currentTarget.files);
          }}
          accept="audio/midi,audio/x-midi,.mid,.midi"
          type="file"
          className="fileinput-button"
          multiple
        />
      </div>
    </span>
  );
}

export function OctoplayTab() {
  const [useG4, setUseG4] = useState(false);
  const [files, setFiles] = useState<MidiFile[]>([]);
  const [activeFileId, setActiveFileId] = useState<string | null>(null);

  useEffect(() => {
    getAllMIDIFiles().then(async (store) => {
      const storedFiles = await Promise.all(store.map(MidiFile.fromJSON));

      setFiles(storedFiles);

      setActiveFileId(
        storedFiles
          .sort((a, b) => a.fileName.localeCompare(b.fileName))
          .find((i) => i.isPlayable)?.id ?? null
      );
    });
  }, []);

  // TODO: implement chunked playback
  const [gcodeChunkMs, setGcodeChunkMs] = useState<number | null>(5000);

  const activeFile = files.find((i) => i.id === activeFileId);

  const [playback, setPlayback] = useState({
    playing: false,
    durationMs: 0,
    progressMs: 0,
  });

  const gcodeCommand = useRef<GcodeCommand | null>(null);

  useInterval(() => {
    if (gcodeCommand.current) {
      gcodeCommand.current.tick();
      setPlayback({
        playing: gcodeCommand.current.state === "PLAYING",
        durationMs: gcodeCommand.current.durationMs,
        progressMs: gcodeCommand.current.progressMs,
      });
    }
  }, 100);

  const { preview, setPreviewTrack, togglePreviewTrack, cancelPreview } =
    usePreview();

  useEffect(() => {
    gcodeCommand.current = new GcodeCommand(
      activeFile?.getGcode().gcode!,
      gcodeChunkMs
    );
    setPlayback({
      playing: false,
      durationMs: gcodeCommand.current.durationMs,
      progressMs: 0,
    });
  }, [activeFileId, useG4, gcodeChunkMs]);

  function togglePreview() {
    Tone.getTransport().toggle();
  }

  function skipPreviewToStart() {
    // const file = files.find((i) => i.id === preview.trackId);
    // if (file) {
    //   setPreviewTrack(file.id, file.getGcode().schedule, false);
    // }
  }

  function togglePlayback() {
    if (!gcodeCommand.current) return;

    if (playback.playing) {
      gcodeCommand.current.pause();
    } else {
      if (gcodeCommand.current.state === "FINISHED") {
        gcodeCommand.current.goToBeginning();
      }
      gcodeCommand.current.unpause();
    }
    setPlayback((prev) => ({ ...prev, playing: !prev.playing }));
  }

  function skipPlaybackToStart() {
    if (!gcodeCommand.current) return;

    gcodeCommand.current.goToBeginning();
  }

  const onMidiUpload = useCallback(async (rawFiles: FileList) => {
    const newMidifiles = await Promise.all(
      Array.from(rawFiles).map((i) => MidiFile.fromFile(i))
    );
    setFiles((prev) => [...prev, ...newMidifiles]);

    newMidifiles.map((i) => storeMIDIFile(i.toJSON()));

    setActiveFileId(
      (prev) => prev ?? newMidifiles.find((i) => i.isPlayable)?.id ?? null
    );
  }, []);

  const onDeleteEntry = useCallback((id: string) => {
    setFiles((prev) => prev.filter((i) => i.id !== id));

    deleteMIDIFile(id);
  }, []);

  const onDownloadEntry = useCallback(
    (id: string) => {
      const file = files.find((i) => i.id === id);

      if (!file) return;

      // Create a temporary download link
      const link = document.createElement("a");
      link.href = file.dataURL;
      link.download = file.fileName;
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(file.dataURL);
    },
    [files]
  );

  const onRenameEntry = useCallback((id: string, name: string) => {
    setFiles((prev) => [
      ...prev.map((i) => (i.id === id ? i.setFileName(name) : i)),
    ]);
    storeMIDIFile(files.find((i) => i.id === id)!.toJSON());
  }, []);

  const hasFiles = files.length > 0;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="accordion-inner"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h1 style={{ margin: 0, border: "none" }}>MIDI Player</h1>
        <FileUpload onInput={onMidiUpload} />
      </div>
      {hasFiles && (
        <FilesBrowser
          preview={preview}
          files={files}
          selectedId={activeFileId}
          onSelect={setActiveFileId}
          onDeleteEntry={onDeleteEntry}
          onRenameEntry={onRenameEntry}
          onDownloadEntry={onDownloadEntry}
          onUpload={onMidiUpload}
          onCopyGcode={async (id) => {
            const file = files.find((i) => i.id === id);

            if (!file) return;

            const gcode = file.getGcode().gcode;

            try {
              // navigator.clipboard.writeText only works for https or localhost. since most octoprint apps run on http with .local domains, we need to use the fallback method.
              await navigator.clipboard.writeText(gcode);
            } catch (err) {
              const textArea = document.createElement("textarea");
              textArea.value = gcode;
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand("copy");
              document.body.removeChild(textArea);
            }
          }}
          onTogglePlayback={(id) => {
            const file = files.find((i) => i.id === id);

            if (!file) return;

            setPreviewTrack(file.getCopy(), true);
          }}
          onCancelPreview={cancelPreview}
        />
      )}
      {activeFile && (
        <TrackControls
          midi={activeFile}
          preview={preview}
          togglePreview={togglePreview}
          skipPreviewToStart={skipPreviewToStart}
          onPlaybackOptionsChange={(options) =>
            setFiles((prev) => {
              const sachen = prev.map((i) =>
                i.id === activeFileId ? i.getCopy().setOptions(options) : i
              );
              console.log("storing sachen:", sachen);
              sachen.map((i) => storeMIDIFile(i.toJSON()));

              return sachen;
            })
          }
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
  // playbackOptions,
  onPlaybackOptionsChange,
  preview,
  togglePreview,
  skipPreviewToStart,
  playback,
  togglePlayback,
  skipPlaybackToStart,
}: {
  midi: MidiFile;
  // playbackOptions: GcodeToMidiOptions;
  onPlaybackOptionsChange: (options: GcodeToMidiOptions) => void;
  preview: Preview;
  togglePreview: () => void;
  skipPreviewToStart: () => void;
  playback: {
    playing: boolean;
    chunkIntervalMs: number | null;
    chunked: boolean;

    progressMs: number;
    durationMs: number;
  };
  togglePlayback: () => void;
  skipPlaybackToStart: () => void;
}) {
  const [showSettings, setShowSettings] = useState(false);

  const hasMultipleTracks = (midi.tracks?.length ?? 0) > 1;

  return (
    <div>
      {/* <div style={{ display: "flex" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
          }}
          className="btn span4"
          onClick={togglePreview}
        >
          <i
            className={"fas " + (preview.playing ? "fa-pause" : "fa-play")}
          ></i>
          <span>{preview.playing ? "Pause" : "Play"} Preview</span>
        </button>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
          }}
          className="btn span4"
          onClick={skipPreviewToStart}
        >
          <i className="fas fa-step-backward"></i>
          <span>Restart Preview</span>
        </button>
      <div>*/}
      <div
        className="accordion-inner"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <span style={{ marginBottom: "0.5rem" }}>
          {midi.fileName || <i>Unnamed File</i>}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              margin: 0,
            }}
            className="btn span4"
            onClick={skipPlaybackToStart}
          >
            <i className={"fas fa-step-backward"}></i>
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              margin: 0,
            }}
            className="btn span4"
            onClick={togglePlayback}
            disabled={playback.playing && !playback.chunked}
          >
            <i
              className={"fas " + (playback.playing ? "fa-pause" : "fa-play")}
            ></i>
          </button>
          <span>{formatDuration(playback.progressMs)}</span>
          <div
            className="progress progress-text-centered"
            style={{ width: "100%", margin: 0 }}
          >
            <div
              className="bar"
              style={{
                width:
                  (playback.playing
                    ? (playback.progressMs / playback.durationMs) * 100
                    : 0) + "%",
              }}
            ></div>
            <span className="progress-text-back"></span>
          </div>
          <span>
            {formatDuration(
              midi.midiDurationMs >= 1000 ? midi.midiDurationMs : 1000
            )}
          </span>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              margin: 0,
            }}
            className="btn span4"
            onClick={() => setShowSettings((prev) => !prev)}
          >
            <i className="fas fa-wrench"></i>
          </button>
        </div>
        <div
          style={{
            overflow: "hidden",
            height: showSettings ? "auto" : "0px",
          }}
        >
          <div style={{ paddingTop: "14px" }}>
            {hasMultipleTracks && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {midi.tracks?.map((track, idx) => {
                  const trackSettings = midi.options.tracks?.[idx];

                  return (
                    <label key={idx} className="checkbox">
                      <input
                        type="checkbox"
                        checked={trackSettings?.enabled}
                        onChange={(e) => {
                          const newTracks = [...midi.options.tracks!];
                          newTracks[idx] = {
                            ...newTracks[idx],
                            enabled: e.target.checked,
                          };
                          onPlaybackOptionsChange({
                            ...midi.options,
                            tracks: newTracks,
                          });
                        }}
                      />
                      <span>
                        Track {idx + 1}: {track.name} - {track.notes.length}{" "}
                        notes
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
            <label>
              Speed:
              <input
                type="number"
                step="0.1"
                min="0.1"
                value={midi.options.speed!}
                onChange={(e) =>
                  onPlaybackOptionsChange({
                    ...midi.options,
                    speed: parseFloat(e.target.value),
                  })
                }
              />
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                checked={midi.options.useG4}
                onChange={(e) =>
                  onPlaybackOptionsChange({
                    ...midi.options,
                    useG4: e.target.checked,
                  })
                }
              />
              <span>Printer runs on Duet firmware</span>
            </label>
            <textarea
              rows={10}
              cols={100}
              style={{ width: "100%", resize: "vertical" }}
              value={midi.getGcode().gcode}
            />

            <label className="checkbox">
              <input
                type="checkbox"
                // checked={playbackOptions.useG4}
                // onChange={(e) =>
                //   onPlaybackOptionsChange({
                //     ...playbackOptions,
                //     useG4: e.target.checked,
                //   })
                // }
              />
              <span>Chunked playback</span>
            </label>
            <label>
              Playback chunk size (ms):
              <input
                type="number"
                step="100"
                min="100"
                max="10000"
                value={playback.chunkIntervalMs ?? 10}
                // onChange={(e) =>
                //   onPlaybackOptionsChange({
                //     ...playbackOptions,
                //     speed: parseFloat(e.target.value),
                //   })
                // }
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
