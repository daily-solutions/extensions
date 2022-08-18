import Daily from "@daily-labs/extensions";
let iframe = Daily.iframe;
let callstate = Daily.callstate;

let fp, iframeEl, call;

const props = {};

/* Extension configuration */
// don't use the iframe extension's button
iframe.configure({ url: "about:blank", buttons: {}, showUrl: false });

function configure(config) {
  Object.assign(props, config);
}

/* Private implementation */

async function getTokenFromServer() {
  const response = await fetch("https://daily-miro.glitch.me/jwt");
  const token = await response.text();
  return token;
}

function handleMiroButton() {
  console.log("inside handlemirobutton");
  if (callstate.state.iframe?.open === true) {
    callstate.updateCallState(
      "iframe",
      {
        open: false,
      },
      true,
      call
    );
  } else if (
    callstate.state.iframe?.url &&
    callstate.state.iframe?.url !== "about:blank"
  ) {
    // then we already have a board picked; show it again
    callstate.updateCallState(
      "iframe",
      {
        open: true,
      },
      true,
      call
    );
  } else {
    console.log("let's pick a board, call is: ", call);
    const boardProps = {
      clientId: props.clientId,
      getAnonymousUserToken: () => getTokenFromServer(),
      action: "access-link",
      success: (result) => {
        console.log("picked board: ", result);
        callstate.updateCallState(
          "iframe",
          {
            open: true,
            url: result.accessLink,
          },
          true,
          call
        );
      },
    };
    if (props.anonymous === true) {
      boardProps.allowCreateAnonymousBoards = true;
    }
    miroBoardsPicker.open(boardProps);
  }
}

function beforeCreateFrame(parentEl, properties) {
  //TODO: can we avoid this somehow?
  [parentEl, properties] = iframe.beforeCreateFrame(parentEl, properties);
  if (!properties.customTrayButtons) {
    properties.customTrayButtons = {};
  }
  properties.customTrayButtons.miro = {
    iconPath: "https://miro.com/blog/wp-content/uploads/2020/01/M-icon.svg",
    label: "Miro",
    tooltip: "Show/Hide Miro Whiteboard",
  };

  return [parentEl, properties];
}

function afterCreateFrame(c) {
  call = c;
  //TODO: Can we avoid this somehow?
  iframe.afterCreateFrame(c);
  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "miro":
        handleMiroButton();
        break;
    }
  });
}

export default {
  afterCreateFrame,
  beforeCreateFrame,
  configure,
};
