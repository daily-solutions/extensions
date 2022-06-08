import daily from "./core.js";

let fpEl, leftEl, rightEl, grabberEl, wrapperEl;
let call;
let isHandlerDragging = false;
let flexpanelOpen = false;
let activeSpeakerWas;

/* Daily configuration */
daily.afterCreateFrame((c) => (call = c));

/* Public interface */
let self;
export default self = {
  create: function ({ leftNode, rightNode, button }) {
    // currently designed for an iframe on the left
    // and a node (the Daily iframe) on the right.
    // creates a side-by-side layout that can be opened and closed
    // with a toolbar button
    // you can pass in a button to create a simple toggle button, but if
    // you want more control (i.e. shared across call state),
    // you should do the button yourself for now

    leftEl = document.createElement("div");
    rightEl = document.createElement("div");
    daily.beforeCreateFrame((parentEl, properties) => {
      // TODO: maybe namespace shared resources like tray buttons?
      if (button) {
        if (!properties.customTrayButtons) {
          properties.customTrayButtons = {};
        }
        properties.customTrayButtons.fp = button;
      }

      return [parentEl, properties];
    });

    daily.afterCreateFrame((call) => {
      if (button) {
        call.on("custom-button-click", (e) => {
          switch (e.button_id) {
            case "fp":
              self.toggle();
              break;
          }
        });
      }
    });

    // add some styles that control behavior of the flexpanel
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `body {
        margin: 0px;
        padding: 0px;
      }
      #flexpanel {
        display: flex;
        border: 0px;
        position: absolute;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      .leftContainer {
        flex: 0;
        display: none;
      }
      .leftContainer.flexpanelOpen {
        display: flex;
        flex: 80 80 auto;
      }
      .rightContainer {
        flex: 100;
      }
      .rightContainer.flexpanelOpen {
        flex: 20 20 auto;
      }

      #grabber {
        width: 20px;
        padding: 0;
        cursor: ew-resize;
        flex: 0 0 auto;
        display: none;
      }
      #grabber.flexpanelOpen {
        display: flex;
        width: 10px;
      }

      #grabber.flexpanelOpen::before {
        content: "";
        display: block;
        width: 4px;
        height: 40px;
        background: #afafaf;
        border-radius: 2px;
        margin: auto;
      }`;
    document.head.appendChild(styleEl);

    // create the flexpanel around the daily container
    fpEl = document.createElement("div");
    fpEl.setAttribute("id", "flexpanel");
    fpEl.appendChild(leftEl);
    grabberEl = document.createElement("div");
    grabberEl.setAttribute("id", "grabber");
    leftEl.classList.add("leftContainer");
    rightEl.classList.add("rightContainer");

    // Gymastics to put all the nodes in the right hierarchy
    rightNode.parentNode.insertBefore(fpEl, rightNode);
    fpEl.appendChild(leftEl);
    fpEl.appendChild(grabberEl);
    fpEl.appendChild(rightEl);

    leftEl.appendChild(leftNode);
    rightEl.appendChild(rightNode);

    document.addEventListener("mousedown", function (e) {
      // If mousedown event is fired from grabberEl, toggle flag to true
      if (e.target === grabberEl) {
        const rightElIframe = document.querySelector(
          "iframe.rightContainer, .rightContainer iframe"
        );
        const leftElIframe = document.querySelector(
          "iframe.leftContainer, .leftContainer iframe"
        );

        isHandlerDragging = true;
        console.log(
          "leftElIframe",
          leftElIframe,
          "rightElIframe",
          rightElIframe
        );

        if (leftElIframe) {
          leftElIframe.style.pointerEvents = "none";
        }
        if (rightElIframe) {
          rightElIframe.style.pointerEvents = "none";
        }
      }
    });

    document.addEventListener("mousemove", function (e) {
      // Don't do anything if dragging flag is false
      if (!isHandlerDragging) {
        return false;
      }

      // Get offset
      const containerOffsetLeft = leftEl.offsetLeft;

      // Get x-coordinate of pointer relative to container
      const pointerRelativeXpos = e.clientX - containerOffsetLeft;

      // Arbitrary minimum width set on box A, otherwise its inner content will collapse to width of 0
      const leftElMinWidth = 60;

      // Resize box A
      // * 8px is the left/right spacing between grabberEl and its inner pseudo-element
      // * Set flex-grow to 0 to prevent it from growing
      leftEl.style.width =
        Math.max(leftElMinWidth, pointerRelativeXpos - 8) + "px";
      leftEl.style.flexGrow = 0;
    });

    document.addEventListener("mouseup", function (e) {
      // Turn off dragging flag when user mouse is up
      isHandlerDragging = false;
      const rightElIframe = document.querySelector(
        "iframe.rightContainer, .rightContainer iframe"
      );
      const leftElIframe = document.querySelector(
        "iframe.leftContainer, .leftContainer iframe"
      );

      if (leftElIframe) {
        leftElIframe.style.pointerEvents = "auto";
      }
      if (rightElIframe) {
        rightElIframe.style.pointerEvents = "auto";
      }
    });
    // end drag to resize

    return {
      left: leftEl,
      right: rightEl,
    };
  },

  open: function () {
    rightEl.classList.add("flexpanelOpen");
    leftEl.classList.add("flexpanelOpen");
    grabberEl.classList.add("flexpanelOpen");
    activeSpeakerWas = call.activeSpeakerMode();
    call.setActiveSpeakerMode(false);
    flexpanelOpen = true;
  },
  close: function () {
    rightEl.classList.remove("flexpanelOpen");
    leftEl.classList.remove("flexpanelOpen");
    grabberEl.classList.remove("flexpanelOpen");
    call.setActiveSpeakerMode(activeSpeakerWas);
    flexpanelOpen = false;
  },
  toggle: function () {
    flexpanelOpen === true ? this.close() : this.open();
  },
};
