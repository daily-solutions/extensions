//import daily from "./core.js";
import flexpanel from "./flexpanel.js";
import callstate from "./callstate.js";

let fp, iframeEl, locationEl, call;
let open = false;

/* Defaults */
const defaultButtons = {
  selectUrl: {
    iconPath: "https://www.svgrepo.com/show/107601/globe.svg",
    label: "Iframe",
    tooltip: "Open Iframe",
  },
};

const props = {
  url: "about:blank", // used to set the initial URL for the iframe.
  buttons: defaultButtons, // used to change the button names and/or icons.
  showUrl: false, // controls whether to display the active iframe URL as a pseudo-address-bar
  // above the iframe content.
};

/* Public interface */
let self;
export default self = {
  beforeCreateFrame,
  afterCreateFrame,
  configure: function (p) {
    Object.assign(props, p);
  },
  open: function (url) {
    // sets a new URL for the iframe and opens
    props.url = url;
    open = true;
    callstate.updateCallState("iframe", { url, open }, true, call);
  },
  close: function () {
    // closes the iframe and clears URL
    props.url = "about:blank";
    open = false;
    callstate.updateCallState("iframe", { url: props.url, open }, true, call);
  },
  show: function () {
    // just shows the iframe (flexpanel)
    open = true;
    callstate.updateCallState("iframe", { open }, true, call);
  },
  hide: function () {
    // just hides without removing URL
    open = false;
    callstate.updateCallState("iframe", { open }, true, call);
  },
  setUrl: function (url) {
    // updates URL without changing
    // show/hide state
    props.url = url;
    callstate.updateCallState("iframe", { url: props.url }, true, call);
  },
};

/* Daily configuration */
function beforeCreateFrame(parentEl, properties) {
  // TODO: maybe namespace shared resources like tray buttons?
  if (!properties.customTrayButtons) {
    properties.customTrayButtons = {};
  }
  Object.assign(properties.customTrayButtons, props.buttons);
  // create a flexpanel from the passed parentEl, which becomes the daily panel
  let containerEl = document.createElement("div");
  containerEl.style = `
  position: relative;
  width: 100%;
  height: 100%;
  `;
  locationEl = document.createElement("div");
  locationEl.style = `
  padding: 4px;
  `;
  locationEl.innerHTML = "Location goes here";
  iframeEl = document.createElement("iframe");
  iframeEl.style = `
  border: 0px;
  position: relative;
  width: 100%;
  height: 100%;
  `;

  // only attach the location element if it should be displayed
  if (props.showUrl === true) {
    containerEl.appendChild(locationEl);
  }
  containerEl.appendChild(iframeEl);
  iframeEl.src = props.url;
  fp = flexpanel.create({
    leftNode: containerEl,
    rightNode: parentEl,
  });
  // hang on to the iframe created by the flexpanel

  return [parentEl, properties];
}

async function afterCreateFrame(c) {
  call = c;

  callstate.onCallStateUpdate("iframe", (state) => {
    if ("url" in state) {
      handleUrlUpdate(state.url);
    }
    if ("open" in state) {
      state.open === true ? handleShow() : handleHide();
    }
  });
  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "selectUrl":
        handleSelectButton();
        break;
      case "close":
        self.close();
        break;
    }
  });

  // TODO-CB: Hmm, I don't love this
  flexpanel.afterCreateFrame(c);
}

/* Private implementation */

// overloading the "selectUrl" button to work around a bug with updateCustomTrayButtons for now
function handleSelectButton() {
  if (callstate.state.iframe?.open === true) {
    callstate.updateCallState("iframe", { open: false }, true, call);
  } else {
    selectUrl();
  }
}

function selectUrl() {
  let url = prompt("Enter a URL", props.url);
  if (url) {
    self.open(url);
  }
}

function handleUrlUpdate(url) {
  props.url = url;
  locationEl.innerHTML = url;
  iframeEl.src = url;
}

function handleShow() {
  flexpanel.open();
  open = true;
}

function handleHide() {
  flexpanel.close();
  open = false;
}
