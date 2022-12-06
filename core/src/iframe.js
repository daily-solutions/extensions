//import daily from "./core.js";
import flexpanel from "./flexpanel.js";
import callstate from "./callstate.js";

let fp, iframeEl, locationEl, call, state;
let open = false;

/* Defaults */

const defaultButton = {
  selectUrl: {
    iconPath: "https://www.svgrepo.com/show/107601/globe.svg",
    label: "Iframe",
    tooltip: "Open Iframe",
  },
};

const props = {
  url: "about:blank", // used to set the initial URL for the iframe.
  buttons: {}, // used to change the button names and/or icons.
  showUrl: false, // controls whether to display the active iframe URL as a pseudo-address-bar
  // above the iframe content.
  broadcast: true, // whether to broadcast iframe updates (url and show state) to other participants.
  leftSize: 80, // passes through to the flexpanel
  sidebar: false, // set to 'true' to put your flexpanel on the right side
};

/* Public interface */
let self;
export default self = {
  beforeCreateFrame,
  afterCreateFrame,
  configure: function (p) {
    Object.assign(props, p);
    state = callstate;
  },
  instanceMethods: {
    iframeState: function () {
      const defaultState = { url: props.url, open };
      return callstate.instanceMethods.callState["iframe"] || defaultState;
    },
    openIframe: function (url) {
      // sets a new URL for the iframe and opens
      props.url = url;
      open = true;
      callstate.instanceMethods.updateCallState(
        "iframe",
        { url, open },
        true,
        call
      );
    },
    closeIframe: function () {
      // closes the iframe and clears URL
      props.url = "about:blank";
      open = false;
      callstate.instanceMethods.updateCallState(
        "iframe",
        { url: props.url, open },
        true,
        call
      );
    },
    showIframe: function () {
      // just shows the iframe (flexpanel)
      open = true;
      callstate.instanceMethods.updateCallState("iframe", { open }, true, call);
    },
    hideIframe: function () {
      // just hides without removing URL
      open = false;
      callstate.instanceMethods.updateCallState("iframe", { open }, true, call);
    },
    setIframeUrl: function (url) {
      // updates URL without changing
      // show/hide state
      props.url = url;
      callstate.instanceMethods.updateCallState(
        "iframe",
        { url: props.url },
        true,
        call
      );
    },
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
  parentEl.parentNode.appendChild(containerEl);
  fp = flexpanel.create({
    contentNode: containerEl,
    dailyNode: parentEl,
    contentSize: props.contentSize,
    sidebar: props.sidebar,
  });
  // hang on to the iframe created by the flexpanel

  return [parentEl, properties];
}

async function afterCreateFrame(c) {
  call = c;

  callstate.instanceMethods.onCallStateUpdate("iframe", (state) => {
    if ("url" in state) {
      handleUrlUpdate(state.url);
    }
    if ("open" in state) {
      state.open === true ? handleShow() : handleHide();
    }
  });
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
