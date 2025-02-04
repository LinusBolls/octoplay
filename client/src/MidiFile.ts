import { Midi } from "@tonejs/midi";

import { getGcodeFromMidi, type GcodeToMidiOptions } from "./getGcodeFromMidi";

function readMidiFile(file: File): Promise<Midi> {
  return new Promise<Midi>((res, rej) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result;

      if (!result || !(result instanceof ArrayBuffer)) {
        throw new Error("Invalid file provided.");
      }
      let midi: Midi;
      try {
        midi = new Midi(result);
      } catch (err) {
        rej(err);
        return;
      }

      if (!midi) {
        throw new Error("Invalid file provided.");
      }
      res(midi);
    };
    reader.readAsArrayBuffer(file);
  });
}

function getDefaultOptions(): GcodeToMidiOptions {
  return {
    speed: 1,
    useG4: false,
    tracks: [{ enabled: true }],
  };
}

export class MidiFile {
  public id: string;
  private _file: File;
  private _midi: Midi;

  private constructor(
    file: File,
    midi: Midi,
    options: GcodeToMidiOptions,
    id?: string
  ) {
    this.id = id ?? Math.random().toString(36).substr(2, 9);
    this._file = file;
    this._midi = midi;
    this._options = options;
  }

  public static async fromFile(file: File): Promise<MidiFile> {
    try {
      const midi = await readMidiFile(file);

      return new MidiFile(file, midi, getDefaultOptions());
    } catch (err) {
      return new MidiFile(file, new Midi(), getDefaultOptions());
    }
  }
  public static async fromJSON(json: any): Promise<MidiFile> {
    try {
      const midi = await readMidiFile(json.file);

      return new MidiFile(json.file, midi, json.options, json.name);
    } catch (err) {
      return new MidiFile(
        json.file,
        new Midi(),
        getDefaultOptions(),
        json.name
      );
    }
  }
  public toJSON() {
    return {
      name: this.id,
      file: this._file,
      options: this._options,
    };
  }

  public getGcode(): ReturnType<typeof getGcodeFromMidi> {
    return getGcodeFromMidi(this.tracks, this._options);
  }
  public get tracks(): Midi["tracks"] {
    return this._midi.tracks
      .filter((i) => i.notes.length > 0)
      .sort((a, b) => {
        // tracks that start sooner are first. if two tracks start at the same time, the one with more notes is first.
        const aFirstNote = a.notes.sort((a, b) => a.time - b.time)[0];
        const bFirstNote = b.notes.sort((a, b) => a.time - b.time)[0];

        if (aFirstNote.time === bFirstNote.time) {
          return a.notes.length - b.notes.length;
        }
        return aFirstNote.time - bFirstNote.time;
      });
  }
  public get fileName(): string {
    return this._file.name;
  }
  public get fileSize(): number {
    return this._file.size;
  }
  public get midiDurationMs(): number {
    return this._midi.duration * 1000;
  }

  public get dataURL(): string {
    return URL.createObjectURL(this._file);
  }
  public get isEmpty(): boolean {
    return this._midi.tracks.length === 0;
  }
  public get isPlayable(): boolean {
    return !this.isEmpty;
  }

  public setFileName(name: string): this {
    this._file = new File([this._file], name, this._file);

    return this;
  }

  public getCopy(): MidiFile {
    return new MidiFile(this._file, this._midi, this._options, this.id);
  }

  private _options: GcodeToMidiOptions;

  public get options(): GcodeToMidiOptions {
    return this._options;
  }

  public setOptions(options: GcodeToMidiOptions): this {
    this._options = options;
    return this;
  }
}
