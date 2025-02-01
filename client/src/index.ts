import * as Tone from "tone";
import { Midi } from "@tonejs/midi";

import { GcodeCommand } from "./GcodeCommand";
import { getGcodeFromMidi } from "./getGcodeFromMidi";
import { getHumanReadableDuration } from "./util";

let midi: Midi | null = null;
let command: GcodeCommand | null = null;

let synth = new Tone.Synth({
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

function playNote(frequency: number, duration: number) {
  // Simulate a startup time of 5ms
  return (time: number) => {
    synth.triggerAttackRelease(frequency, duration - 5 / 1000, time);
  };
}

function togglePreview() {
  Tone.getTransport().toggle();
}

function stopPreview() {
  Tone.getTransport().stop();
}

function tryToMountUi() {
  if (!document.querySelector('[data-octoplay="midi-file-input"]')) return;

  const hasMounted = document
    .querySelector('[data-octoplay="midi-file-input"]')
    ?.getAttribute("data-octoplay-mounted");

  if (hasMounted) return;

  mountUi();

  document
    .querySelector('[data-octoplay="midi-file-input"]')!
    .setAttribute("data-octoplay-mounted", "true");
}

function mountUi() {
  console.log("Octoplay mounting UI");

  document
    .querySelector('[data-octoplay="midi-file-input"]')!
    .addEventListener("change", (e) => {
      const files = (e.target as HTMLInputElement).files;

      const hasFiles = files && files.length > 0;

      console.log("Octoplay file input change", files, hasFiles);

      if (hasFiles) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          console.log("Octoplay on reader load");

          const result = e.target?.result;

          if (!result || !(result instanceof ArrayBuffer)) {
            throw new Error("Invalid file provided.");
          }

          midi = new Midi(result);

          if (!midi) {
            throw new Error("Invalid file provided.");
          }
          updateUiOnMidiChange(midi);
        };
        reader.readAsArrayBuffer(file);

        reader.addEventListener("loadend", updateUiOnSettingsChange);
      }
    });

  document
    .querySelector("#previewStart")!
    .addEventListener("click", togglePreview);
  document
    .querySelector("#previewStop")!
    .addEventListener("click", stopPreview);
  document
    .querySelector('[data-octoplay="play"]')!
    .addEventListener("click", () => {
      const gcode = (document.querySelector("#outputArea") as HTMLInputElement)
        .value;

      command = new GcodeCommand(gcode, null);

      console.log("creating gcodecommand");

      command.unpause();

      setInterval(() => command!.tick(), 100);
    });

  document
    .querySelector('[data-octoplay="pauseUnpause"]')!
    .addEventListener("click", () => {
      if (command) {
        if (command.state === "PAUSED") {
          command.unpause();
        } else {
          command.pause();
        }
      }
    });

  document
    .querySelector("#g4toggle")!
    .addEventListener("change", updateUiOnSettingsChange);
  document
    .querySelector("#speedMultiplierInput")!
    .addEventListener("change", updateUiOnSettingsChange);
}

function updateUiOnMidiChange(midi: Midi) {
  console.log("Octoplay update UI on midi change:", midi.tracks);

  let infoDiv = document.querySelector("#trackInfo")!;
  infoDiv.innerHTML = "";

  midi.tracks.forEach((track, index) => {
    infoDiv.innerHTML += `<label class="checkbox"><input id="trackButton${index}" type="checkbox" value=${index} /><span>Track ${
      index + 1
    }: ${track.instrument.name} - ${track.notes.length} notes</span></label>`;

    setInterval(() => {
      document
        .querySelector(`#trackButton${index}`)!
        .addEventListener("change", updateUiOnSettingsChange);
    }, 100);
  });
  infoDiv.innerHTML += `<label>
      Speed multiplier:
      <input
        id="speedMultiplierInput"
        type="number"
        step="0.01"
        min="0.01"
        value="1"
      />
    </label>`;

  document
    .querySelector("#speedMultiplierInput")!
    .addEventListener("change", updateUiOnSettingsChange);

  (document.querySelector("#trackButton0") as HTMLInputElement).checked = true;
}

function updateUiOnSettingsChange() {
  if (!midi) return;

  const speed = parseFloat(
    (document.querySelector("#speedMultiplierInput") as HTMLInputElement).value
  );
  const useG4 = (document.querySelector("#g4toggle") as HTMLInputElement)
    .checked;

  const tracks = midi.tracks.map((_, idx) => ({
    enabled: (document.querySelector(`#trackButton${idx}`) as HTMLInputElement)
      .checked,
  }));

  console.log("Octoplay update UI on settings change:", midi, {
    speed,
    useG4,
    tracks,
  });

  const data = getGcodeFromMidi(midi, {
    speed,
    useG4,
    tracks,
  });

  console.log("Octoplay update UI on settings change:", data);

  (document.querySelector("#outputArea") as HTMLInputElement).value =
    data.gcode;

  document.querySelector("#runDuration")!.innerHTML = getHumanReadableDuration(
    data.durationMs
  );

  // load schedule for preview playback, but don't start playing yet
  for (const note of data.schedule) {
    Tone.getTransport().schedule(
      playNote(note.frequency, note.duration),
      note.time
    );
  }

  // clear previous scheduled tones
  Tone.getTransport().stop();
  Tone.getTransport().cancel();
}

// @ts-expect-error
$(function () {
  // @ts-expect-error
  function OctoplayViewModel(parameters) {
    // @ts-expect-error
    var self = this;

    self.loginState = parameters[0];
    self.settings = parameters[1];
    self.access = parameters[2];

    // // @ts-expect-error
    // self.onTabChange = function (current, previous) {
    //   self.tabActive = current === "#midi";

    //   if (self.tabActive) {
    //     mountUi();
    //   }
    // };
  }

  // @ts-expect-error
  OCTOPRINT_VIEWMODELS.push({
    construct: OctoplayViewModel,
    dependencies: [
      "loginStateViewModel",
      "settingsViewModel",
      "accessViewModel",
    ],
    elements: [
      "#midi",
      "#octoplay_link",
      "#midi_link",
      "#settings_plugin_octoplay",
    ],
  });
});

setInterval(tryToMountUi, 100);
