import daily from "./core.js";
import iframe from "./iframe.js";
import callstate from "./callstate.js";

let fp, iframeEl, call;

let props = {};

/* Extension configuration */
// don't use the iframe extension's button
iframe.configure({ url: iframeUrl(), buttons: {}, showUrl: false });

/* Public interface */
export default {
  configure: function (p) {
    Object.assign(props, p);
  },
};

/* Private implementation */
function iframeUrl() {
  return `https://excalidraw.com/#room=${props.room}`;
}

function handleExcalidrawButton() {
  callstate.updateCallState("iframe", {
    open: !callstate.state.iframe?.open,
  });
}

daily.beforeCreateFrame((parentEl, properties) => {
  // TODO: maybe namespace shared resources like tray buttons?
  if (!properties.customTrayButtons) {
    properties.customTrayButtons = {};
  }
  properties.customTrayButtons.excalidraw = {
    iconPath: "https://www.svgrepo.com/show/52553/pencil.svg",
    label: "Draw",
    tooltip: "Draw",
  };

  return [parentEl, properties];
});

daily.afterCreateFrame(async (c) => {
  call = c;

  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "excalidraw":
        handleExcalidrawButton();
        break;
    }
  });
});
