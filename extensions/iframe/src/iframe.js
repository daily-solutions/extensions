const props = {};

function configure(config) {
  Object.assign(props, config);
}

function handleIframeButton(call) {
  const s = call.iframeState();
  if (s.open === true) {
    call.closeIframe();
  } else {
    let url = prompt("Enter a URL", props.url);
    if (url) {
      call.openIframe(url);
    }
  }
}

function beforeCreateFrame(parentEl, properties) {
  //TODO: can we avoid this somehow?
  if (!properties.customTrayButtons) {
    properties.customTrayButtons = {};
  }
  properties.customTrayButtons.iframe = {
    iconPath: "https://www.svgrepo.com/show/107601/globe.svg",
    label: "Iframe",
    tooltip: "Open Iframe",
  };

  return [parentEl, properties];
}

function afterCreateFrame(call) {
  //TODO: Can we avoid this somehow?
  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "iframe":
        handleIframeButton(call);
        break;
    }
  });
}

export default {
  afterCreateFrame,
  beforeCreateFrame,
  configure,
};
