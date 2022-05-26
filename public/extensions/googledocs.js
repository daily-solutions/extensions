import daily from "./core.js";
import flexpanel from "./flexpanel.js";
import callstate from "./callstate.js";

let props, fp, iframeEl, call;

export default {
  configure: function (p) {
    props = p;
  },
};

function setIframeUrl() {
  iframeEl.src = `https://docs.google.com/document/d/${props.docId}/edit`;
}

function getTokenFromServer() {
  return fetch("https://daily-miro.glitch.me/jwt");
}

daily.beforeCreateFrame((parentEl, properties) => {
  // TODO: maybe namespace shared resources like tray buttons?
  if (!properties.customTrayButtons) {
    properties.customTrayButtons = {};
  }

  properties.customTrayButtons.toggle = {
    iconPath:
      "https://cdn.glitch.global/dcb584f3-95aa-4929-82e0-ca6ee9b2b12f/docs.png",
    label: "Docs",
    tooltip: "Docs",
  };

  // create a flexpanel from the passed parentEl, which becomes the daily panel
  fp = flexpanel.create({
    rightNode: parentEl,
  });
  // hang on to the iframe created by the flexpanel
  iframeEl = fp.contentIframe;
  setIframeUrl();

  return [parentEl, properties];
});

daily.afterCreateFrame(async (c) => {
  call = c;

  callstate.onCallStateUpdate((state) => {
    if ("boardId" in state) {
      setIframeUrl(state.boardId);
    }
    if ("open" in state) {
      state.open === true ? flexpanel.open() : flexpanel.close();
    }
  });

  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "toggle":
        callstate.updateCallState({ open: !callstate.state.open });

        break;
    }
  });
});
