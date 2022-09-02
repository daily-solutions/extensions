import Daily from "@daily-labs/daily";

let call;
const props = {};

function configure(config) {
  Object.assign(props, config);
}

async function getTokenFromServer() {
  const response = await fetch("https://daily-miro.glitch.me/jwt");
  const token = await response.text();
  return token;
}

function handleMiroButton() {
  const s = call.iframeState();
  if (s.open === true) {
    // we have a board picked; just hide it
    call.hideIframe();
  } else if (s.url !== "about:blank") {
    // then we already have a board picked; show it again
    call.showIframe();
  } else {
    console.log("Selecting Miro board...");
    const boardProps = {
      clientId: props.clientId,
      getAnonymousUserToken: () => getTokenFromServer(),
      action: "access-link",
      success: (result) => {
        console.log("Selected Miro board: ", result);
        call.openIframe(result.accessLink);
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
