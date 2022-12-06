let call;
const props = {};
let iframeOpen = false;

function configure(config) {
  Object.assign(props, config);
}

async function getTokenFromServer() {
  const response = await fetch("https://daily-miro.glitch.me/jwt");
  const token = await response.text();
  return token;
}

function handleMiroButton(call) {
  if (iframeOpen === true) {
    // we have a board picked; just hide it
    //new call.hideIframe();
    call.udpateCustomIntegrations({});
    iframeOpen = false;
    //new} else if (s.url !== "about:blank") {
    // then we already have a board picked; show it again
    //new  call.showIframe();
  } else {
    console.log("Selecting Miro board...");
    const boardProps = {
      clientId: props.clientId,
      getAnonymousUserToken: () => getTokenFromServer(),
      action: "access-link",
      success: (result) => {
        console.log("Selected Miro board: ", result);
        //new call.openIframe(result.accessLink);
        call.updateCustomIntegrations({
          location: "main",
          name: "Miro Whiteboard",
          shared: true,
          src: result.accessLink,
        });
      },
    };
    if (props.anonymous === true) {
      boardProps.allowCreateAnonymousBoards = true;
    }
    miroBoardsPicker.open(boardProps);
    iframeOpen = true;
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

function afterCreateFrame(call) {
  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "miro":
        handleMiroButton(call);
        break;
    }
  });
}

export default {
  afterCreateFrame,
  beforeCreateFrame,
  configure,
};
