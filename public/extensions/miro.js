import daily from "./core.js";
import iframe from "./iframe.js";
import callstate from "./callstate.js";

let fp, iframeEl, call;

const props = {};

/* Extension configuration */
// don't use the iframe extension's button
iframe.configure({ url: "about:blank", buttons: {}, showUrl: false });

/* Public interface */
export default {
  configure: function (p) {
    Object.assign(props, p);
  },
};

/* Private implementation */

function iframeUrl(boardId) {
  return "https://miro.com/app/live-embed/" + boardId;
}

async function getTokenFromServer() {
  const response = await fetch("https://daily-miro.glitch.me/jwt");
  const token = await response.text();
  return token;
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
    const boardProps = {
      clientId: props.clientId,
      getAnonymousUserToken: () => getTokenFromServer(),
      action: "access-link",
      success: (result) => {
        console.log("picked board: ", result);
        callstate.updateCallState("iframe", {
          open: true,
          url: iframeUrl(result.accessLink),
        });
      },
    };
    if (props.anonymous === true) {
      boardProps.allowCreateAnonymousBoards = true;
    }
    miroBoardsPicker.open(boardProps);
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
