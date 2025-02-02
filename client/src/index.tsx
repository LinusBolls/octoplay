import { createRoot } from "react-dom/client";

import { OctoplayTab } from "./TrackControls";

function tryToMountUi() {
  if (!document.querySelector("#midi")) return;

  const hasMounted = document
    .querySelector("#midi")
    ?.getAttribute("data-octoplay-mounted");

  if (hasMounted) return;

  const parent = document.querySelector("#midi")!;
  const reactRoot = createRoot(parent);

  reactRoot.render(<OctoplayTab />);

  document
    .querySelector("#midi")!
    .setAttribute("data-octoplay-mounted", "true");
}
setInterval(tryToMountUi, 100);

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
