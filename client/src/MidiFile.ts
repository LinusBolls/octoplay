import { Midi } from "@tonejs/midi";

import { getGcodeFromMidi, type GcodeToMidiOptions } from "./getGcodeFromMidi";

function readMidiFile(file: File): Promise<Midi> {
  return new Promise<Midi>((res) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result;

      if (!result || !(result instanceof ArrayBuffer)) {
        throw new Error("Invalid file provided.");
      }
      const midi = new Midi(result);

      if (!midi) {
        throw new Error("Invalid file provided.");
      }
      res(midi);
    };
    reader.readAsArrayBuffer(file);
  });
}

export class MidiFile {
  public id: string;
  private _file: File;
  private _midi: Midi;

  private constructor(file: File, midi: Midi) {
    this.id = Math.random().toString(36).substr(2, 9);
    this._file = file;
    this._midi = midi;
  }

  public static async fromFile(file: File): Promise<MidiFile> {
    const midi = await readMidiFile(file);

    return new MidiFile(file, midi);
  }
  public getGcode(
    options: GcodeToMidiOptions
  ): ReturnType<typeof getGcodeFromMidi> {
    return getGcodeFromMidi(this._midi, options);
  }
  public get tracks(): Midi["tracks"] {
    return this._midi.tracks;
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
}
