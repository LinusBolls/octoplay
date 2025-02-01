import { Midi } from "@tonejs/midi";
import { test, expect, describe } from "bun:test";
import { getGcodeFromMidi } from "./getGcodeFromMidi";

const expectedGcode =
  "M300 P703 S349\nM300 P703 S415\nM300 P586 S494\nM300 P234 S494\nM300 P117 S0\nM300 P1289 S494";

const expectedDuration = 3632;

const midiPath = "../data/test.mid";

describe("getGcodeFromMidi", () => {
  test("works", async () => {
    const file = Bun.file(midiPath);

    const bytes = await file.bytes();

    const midi = new Midi(bytes);

    const data = getGcodeFromMidi(midi);

    expect(data.gcode).toEqual(expectedGcode);
    expect(data.durationMs).toEqual(expectedDuration);
    expect(data.schedule.length).toEqual(5);
  });

  test("respects the speed option", async () => {
    const file = Bun.file(midiPath);

    const bytes = await file.bytes();

    const midi = new Midi(bytes);

    const data = getGcodeFromMidi(midi, { speed: 2 });

    expect(data.gcode).toEqual(
      "M300 P352 S349\nM300 P352 S415\nM300 P293 S494\nM300 P117 S494\nM300 P59 S0\nM300 P645 S494"
    );
    expect(data.durationMs).toEqual(1818);
    expect(data.schedule.length).toEqual(5);
  });

  test("respects the useG4 option", async () => {
    const file = Bun.file(midiPath);

    const bytes = await file.bytes();

    const midi = new Midi(bytes);

    const data = getGcodeFromMidi(midi, { useG4: true });

    expect(data.gcode).toEqual(
      "M300 P703 S349\nG4 P703\nM300 P703 S415\nG4 P703\nM300 P586 S494\nG4 P586\nM300 P234 S494\nG4 P234\nM300 P117 S0\nG4 P117\nM300 P1289 S494\nG4 P1289"
    );
    expect(data.durationMs).toEqual(7264);
    expect(data.schedule.length).toEqual(5);
  });

  test("works if all tracks are disabled", async () => {
    const file = Bun.file(midiPath);

    const bytes = await file.bytes();

    const midi = new Midi(bytes);

    const data = getGcodeFromMidi(midi, { tracks: [{ enabled: false }] });

    expect(data.gcode).toEqual("");
    expect(data.durationMs).toEqual(0);
    expect(data.schedule.length).toEqual(0);
  });

  test("works if all tracks are enabled", async () => {
    const file = Bun.file(midiPath);

    const bytes = await file.bytes();

    const midi = new Midi(bytes);

    const data = getGcodeFromMidi(midi, {
      tracks: [
        { enabled: true },
        { enabled: true },
        { enabled: true },
        { enabled: true },
      ],
    });

    expect(data.gcode).toEqual(
      "M300 P234 S523\nM300 P117 S440\nM300 P352 S523\nM300 P234 S659\nM300 P117 S523\nM300 P352 S659\nM300 P352 S784\nM300 P234 S784\nM300 P234 S784\nM300 P117 S0\nM300 P1289 S784"
    );
    expect(data.durationMs).toEqual(3632);
    expect(data.schedule.length).toEqual(10);
  });
});
