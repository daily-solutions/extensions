import daily from "./core.js";
import iframe from "./iframe.js";
import callstate from "./callstate.js";

let fp, iframeEl, call;

let props = {};

// don't use the iframe extension's button
iframe.configure({ url: "about:blank", buttons: {}, showUrl: false });

export default {
  configure: function (p) {
    Object.assign(props, p);
  },
};

function iframeUrl(boardId) {
  return "https://miro.com/app/live-embed/" + boardId;
}

function getTokenFromServer() {
  return fetch("https://daily-miro.glitch.me/jwt");
}

function handleMiroButton() {
  if (callstate.state.iframe?.open === true) {
    callstate.updateCallState("iframe", {
      open: false,
    });
  } else if (
    callstate.state.iframe?.url &&
    callstate.state.iframe?.url !== "about:blank"
  ) {
    // then we already have a board picked; show it again
    callstate.updateCallState("iframe", {
      open: true,
    });
  } else {
    if (props.anonymous === true) {
      miroBoardsPicker.open({
        clientId: props.clientId,
        allowCreateAnonymousBoards: true,
        getToken: () => getTokenFromServer(),
        action: "select",
        success: (result) => {
          console.log("picked board: ", result);
          callstate.updateCallState("iframe", {
            open: true,
            url: iframeUrl(result.id),
          });
        },
      });
    } else {
      miroBoardsPicker.open({
        clientId: props.clientId,
        action: "select",
        success: (result) => {
          console.log("picked board: ", result);
          callstate.updateCallState("iframe", {
            open: true,
            url: iframeUrl(result.id),
          });
        },
      });
    }
  }
}

daily.beforeCreateFrame((parentEl, properties) => {
  // TODO: maybe namespace shared resources like tray buttons?
  if (!properties.customTrayButtons) {
    properties.customTrayButtons = {};
  }
  properties.customTrayButtons.miro = {
    iconPath: "https://miro.com/blog/wp-content/uploads/2020/01/M-icon.svg",
    label: "Miro",
    tooltip: "Show/Hide Miro Whiteboard",
  };

  return [parentEl, properties];
});

daily.afterCreateFrame(async (c) => {
  call = c;

  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "miro":
        handleMiroButton();
        break;
    }
  });
});
