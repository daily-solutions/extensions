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

function getTokenFromServer() {
  //return fetch("https://daily-miro.glitch.me/jwt");
  //return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTYzOTAxNjQ5MjcsImlzcyI6IjM0NTg3NjQ1MjQ0ODc1Njc0NTAiLCJpYXQiOjE2NTYzNDY5NjR9.yCMX54faspXUe_ymH-q1un7_rYD7SAV66BgHFS4DQ1A";
  return Promise.resolve(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTYzOTAxNjQ5MjcsImlzcyI6IjM0NTg3NjQ1MjQ0ODc1Njc0NTAiLCJpYXQiOjE2NTYzNDY5NjR9.yCMX54faspXUe_ymH-q1un7_rYD7SAV66BgHFS4DQ1A"
  );
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
      //allowCreateAnonymousBoards: true,
      getAnonymousUserToken: () => {
        let result = getTokenFromServer();
        console.log("in miro function, result is", result);
        return result;
      },
      action: "select",
      success: (result) => {
        console.log("picked board: ", result);
        callstate.updateCallState("iframe", {
          open: true,
          url: iframeUrl(result.id),
        });
      },
    };
    if (props.anonymous === true) {
      console.log("enabling anonymous boards");
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
