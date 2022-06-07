import daily from "./core.js";
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

/* Public interface */
export default class Socket {
  constructor({ hostname = "", key = "" } = {}) {
    this.hostname = hostname;
    this.key = key;

    this.updateHandlers = [];
    this.state = {};
  }

  _applyStateUpdate(ns) {
    // also used internally when we receive a state update
    // from the messaging channel.
    Object.assign(this.state, ns);
    for (var i = 0; i < this.updateHandlers.length; i++) {
      // try calling handlers with just the updated state
      // to make change detection logic easier
      this.updateHandlers[i](ns);
    }
  }

  _broadcastStateUpdate(newState) {
    this.socket.emit("update", newState);
  }

  connect({ hostname = this.hostname, key = this.key } = {}) {
    this.socket = io(this.hostname + "/" + this.key);
    // listen for requests for state from new peers
    this.socket.on("state", (msg) => {
      this._applyStateUpdate(msg);
    });
  }

  onStateUpdate(callback) {
    this.updateHandlers.push(callback);
  }

  updateState(newState, broadcast = true) {
    this._applyStateUpdate(newState);
    if (broadcast) {
      this._broadcastStateUpdate(newState);
    }
  }

  state() {
    return this.state;
  }
}
