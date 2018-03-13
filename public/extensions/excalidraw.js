import daily from "./core.js";
import iframe from "./iframe.js";
import callstate from "./callstate.js";

let fp, iframeEl, call;

let props = {};

// don't use the iframe extension's button
iframe.configure({ url: iframeUrl(), buttons: {}, showUrl: false });

export default {
  configure: function (p) {
    Object.assign(props, p);
  },
};

function iframeUrl() {
  return "https://excalidraw.com/#room=3f6286f430ba3c0a119d,ARc0_KYIgN7lAOToWVYxRQ";
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
    iconPath: "https://miro.com/blog/wp-content/uploads/2020/01/M-icon.svg",
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
