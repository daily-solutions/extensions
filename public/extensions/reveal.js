import daily from "./core.js";
import flexpanel from "./flexpanel.js";
import callstate from "./callstate.js";

let fp, iframeEl, locationEl, call;
let open = false;

let defaultButtons = {
  present: {
    iconPath:
      "https://cdn.glitch.global/dcb584f3-95aa-4929-82e0-ca6ee9b2b12f/globe.svg",
    label: "Present",
    tooltip: "Present",
  },
  /*close: {
	iconPath:
	  "https://cdn.glitch.global/dcb584f3-95aa-4929-82e0-ca6ee9b2b12f/globe.svg",
	label: "Close",
	tooltip: "Close Iframe",
  },*/
};

// configure defaults that can be
// overridden by calling configure()
let props = {
  presenterUrl: "about:blank",
  viewerUrl: "about:blank",
  buttons: defaultButtons,
  showUrl: false,
};

// overloading the "selectUrl" button to work around a bug with updateCustomTrayButtons for now
function handlePresentButton() {
  if (callstate.state.iframe?.open === true) {
    callstate.updateCallState("iframe", { open: false });
  } else {
    selectUrl();
  }
}

let self;
export default self = {
  configure: function (p) {
    Object.assign(props, p);
  },
  /*
  open: function (url) {
    // sets a new URL for the iframe and opens
    props.url = url;
    open = true;
    callstate.updateCallState("iframe", { url, open });
  },
  */
  close: function () {
    // closes the iframe and clears URL

    props.presenterUrl = "about:blank";
    props.viewerUrl = "about:blank";
    open = false;
    callstate.updateCallState("iframe", { url: props.url, open });
  },
  show: function () {
    // just shows the iframe (flexpanel)
    open = true;
    callstate.updateCallState("iframe", { open });
  },
  hide: function () {
    // just hides without removing URL
    open = false;
    callstate.updateCallState("iframe", { open });
  },
  setUrl: function (url) {
    // updates URL without changing
    // show/hide state
    props.url = url;
    callstate.updateCallState("iframe", { url: props.url });
  },
};

function selectUrl() {
  let vu = prompt("Enter the viewer URL:", props.viewerUrl);
  let pu = prompt(
    "Open that URL, then open the console to get the presenter URL:",
    props.presenterUrl
  );
  if (vu && pu) {
    props.presenterUrl = pu;
    props.viewerUrl = vu;
    callstate.updateCallState("iframe", {
      presenterUrl: pu,
      viewerUrl: vu,
      open: true,
    });
  }
}

function handleUrlUpdate(state) {
  if (props.presenter) {
    locationEl.innerHTML = state.presenterUrl;
    iframeEl.src = state.presenterUrl;
    handleShow();
  } else {
    locationEl.innerHTML = state.viewerUrl;
    iframeEl.src = state.viewerUrl;
    handleShow();
  }
}

function handleShow() {
  flexpanel.open();
  open = true;
  // call.updateCustomTrayButtons({ close: closeButton, temp: tempButton });
}

function handleHide() {
  flexpanel.close();
  open = false;
  // call.updateCustomTrayButtons({ selectUrl: selectUrlButton });
}

daily.beforeCreateFrame((parentEl, properties) => {
  // TODO: maybe namespace shared resources like tray buttons?
  if (props.presenter) {
    if (!properties.customTrayButtons) {
      properties.customTrayButtons = {};
    }
    Object.assign(properties.customTrayButtons, props.buttons);
  }

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
  if (props.presenter) {
    iframeEl.src = props.presenterUrl;
  } else {
    iframeEl.src = props.viewerUrl;
  }
  fp = flexpanel.create({
    leftNode: containerEl,
    rightNode: parentEl,
  });
  // hang on to the iframe created by the flexpanel

  return [parentEl, properties];
});

daily.afterCreateFrame(async (c) => {
  call = c;

  callstate.onCallStateUpdate("iframe", (state) => {
    if ("presenterUrl" in state || "viewerUrl" in state) {
      handleUrlUpdate(state);
    }
    if ("open" in state) {
      state.open === true ? handleShow() : handleHide();
    }
  });

  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "present":
        handlePresentButton();
        break;
      case "close":
        self.close();
        break;
    }
  });
});
