# Daily Extensions

This repo is being restructured! For now, check out the following folders for the relevant pieces:

- `/server` for the Daily Extensions Server code that powers `pounce`, `door`, and various `socketiostate`-backed Extensions
- `/core` for the Core module necessary for any app using Extensions
- `/extensions` for the Extensions themselves

---

Extensions are JavaScript modules that extend the functionality of [Daily Prebuilt](https://docs.daily.co/guides/products/prebuilt). Want to put a whiteboard next to Prebuilt in your app? Try the Miro or Whiteboard.chat extension. Want to use CometChat instead of Daily's built-in chat? There's an extension for that (soon).

## Try them now

### Remix them on Glitch

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/daily-demos/extensions)

### Try hosted versions

This repo is auto-deployed to Render, so you can try the extension demo pages at https://daily-extensions.onrender.com. All demos support using your own Daily domain and room by passing URL params:

`https://daily-extensions.onrender.com/demos/miro.html?domain=yourdomain&room=yourroom`

(If you use the default room and domain in the demo file, you might make some new friends!)

Many demos also support additional URL params. Check the source code for specifics.

## Current extensions and demos: client-side only

- **[Iframe Embed](https://daily-extensions.onrender.com/demos/iframe.html): Put any webpage you want beside Prebuilt.**
- **[Miro Whiteboard](https://daily-extensions.onrender.com/demos/miro.html)**, powered by the `Miro` extension. (The board is read-only for now; I'm working on it.)
- **[Whiteboard.chat](https://daily-extensions.onrender.com/demos/wc.html)**, powered by the `WhiteboardChat` extension. You'll need to [join as a teacher](https://daily-extensions.onrender.com/demos/wc.html?teacher=true) to open or close the board.
- **[Excalidraw Whiteboard](https://daily-extensions.onrender.com/demos/mediaplayer.html)**, which uses a single, fixed Excalidraw whiteboard (pending some API work).
- **[Remote Media Playback](https://daily-extensions.onrender.com/demos/mediaplayer.html)**, which demonstrates using Remote Media Playback to play a video file or RTMP stream into a Daily room. Unfortunately, remote media playback uses custom track types, so you can't see or hear the video in Prebuilt right now. But if you open a separate page with a Call Object mode implementation and automatic track subscription, you'll see and hear the video.
- **[Event Logger](https://daily-extensions.onrender.com/demos/eventlogger.html)**, a simple demo of the Event Logger extension, which adds additional helpful console messages.

You can try these extensions with the hosted versions linked above, or clone the repo and open them directly from the `/public` directory.

## Current Extensions and Demos: Server-Backed

Some extensions need to share state information outside the context of a Daily call. Since there isn't a great way to do that with `daily-js` directly, these extensions require a basic websocket server to function. You can see that in `server.js`.

- **["Pouncing"](https://daily-extensions.onrender.com/demos/pounce.html)**: For use cases where two participants might join a room at very different times, and you don't want to pay for the first user being connected to the meeting alone. The first user that visits this page will see a "Waiting for others" message. When a second person opens the page, they will both join the Daily room. When one of them leaves (so the participant count goes back down to 1), the remaining person will exit the call and go back to the waiting screen.
- **[Door](https://daily-extensions.onrender.com/demos/door.html)**: Adds a button to the toolbar that opens or closes the "door" to the room. When the door is closed, anyone who tries to join the room will see a message that the door is closed. If someone currently in the meeting clicks the button to open the door, anyone who is waiting will immediately `join()` the call.
- **[Breakout Rooms](https://daily-extensions.onrender.com/demos/door.html)**: Sets up the foundation needed to create custom breakout room experiences. Includes examples on how to dynamically create rooms with the API, send users to a room, and bring them back to the main room.

To try these extensions on your own computer, you'll need a simple Express server app that provides some websocket functionality. The easiest way to get started is to clone the repo:

```
$ git@github.com:daily-demos/extensions.git
$ cd extensions
$ npm i
$ npm start
```

This same app also serves the demo files from the `/public` directory, so you can open the iframe demo by visiting `http://localhost:3000/demos/iframe.html`, for example.

## Using Extensions

Using extensions is just about as easy as using Daily Prebuilt by itself. You'll need to do a few extra things:

1. Include the core extensions file, as well as any actual extensions you want to use, as `<script type="module">` tags in your HTML `<head>`.
2. Import each extension you're using.
3. Call the "configure" function on any extensions that need it.
4. Use the core extension, normally imported as `daily`, to create your call frame (instead of the usual `DailyIframe` class).

Here's an example that uses the `Miro` extension, which requires a bit of configuration:

```html
<html>
  <head>
    <title>Daily.co Iframe Demo</title>
    <!-- script crossorigin src="https://unpkg.com/@daily-co/daily-js"></script -->
    <script
      type="text/javascript"
      src="https://miro.com/app/static/boardsPicker.1.0.js"
    ></script>
    <script src="daily.js"></script>
    <script type="module" src="extensions.core.js"></script>
    <script type="module" src="extensions.miro.js"></script>
    <script type="module" src="extensions.eventlogger.js"></script>
    <style></style>
  </head>
  <body onload="main()">
    <div id="dailyContainer"></div>

    <script type="module">
      const urlParams = new URLSearchParams(window.location.search);
      const domain = urlParams.get("domain");
      const room = urlParams.get("room");

      import daily from "../extensions/core.js";
      import miro from "../extensions/miro.js";

      miro.configure({ clientId: "yourclientid" });

      window.main = async function () {
        window.call = daily.createFrame(dailyContainer, {
          url: `https://${domain}.daily.co/${room}`,
          dailyConfig: {
            experimentalChromeVideoMuteLightOff: true,
          },
        });

        window.dailyFrame = call.iframe();
        await call.join();
      };
    </script>
  </body>
</html>
```

## The Extensions Architecture

Daily Extensions are JavaScript modules that add features to Daily calls in your app. They mostly use the same `daily-js` code you'd use in your own app, but they can use the core extension to hook into a few additional lifecycle events. They are designed to provide common implementations of use cases we see frequently. But they're also designed to be modular and readable, so you can customize them to your specific use case, or swap out pieces to build exactly what you need.

Let's look at the `miro` whiteboard extension, for example. It adds a custom Toolbar button that enables you to pick a Miro board from your account. When you pick a board, it opens in a side panel (called a 'flexpanel') for everyone on the call, similar to how a screenshare appears in Prebuilt.

`miro` adds a few customizations to the `iframe` extension, which is a general-purpose extension for showing iframe content next to Prebuilt. `iframe` uses the `beforeCreateFrame` and `afterCreateFrame` functions from the core extension to add the button to the toolbar, and to set up event handlers for when the button is clicked. It also uses two other extensions: `flexpanel` for the layout as described above, and `callstate` for sharing some call state information.

The `callstate` extension creates a 'call state' object that stays in sync for everyone in the call, using the [daily-js `sendAppMessage` function](https://docs.daily.co/reference/daily-js/instance-methods/send-app-message). When a user picks a Miro board, the `miro` extension uses `callstate` to ensure that everyone in the call (and anyone that joins later) sees the correct whiteboard.

The `flexpanel` extension is a UI component that displays an iframe beside Daily Prebuilt, and adds a "drag-to-resize" handle between the two. The `miro` extension displays its whiteboard inside a `flexpanel`.

If you want to use the `miro` extension in a React app, you'll probably want to replace the `flexpanel` extension with your own React component. The `flexpanel` extension exports just a few things: `create({iframeSrc})`, `open()`, `close()`, and `toggle()`. If your component can also export those functions, it should be a drop-in replacment for `flexpanel`.

Likewise, you may already be using something like socket.io for real-time messaging between users of your app. If that's the case, you can replace `miro`'s use of `callstate` with anything that implements the same interface: `onCallStateUpdate(fn)`, `updateCallState(newState)`, and an accessor for `state`.

## Building With the Extensions API

You can build your own extension by creating a module that imports the `extensions.core.js` module. The core extension exports two functions that you can use in your own extension.

**`beforeCreateFrame(fn(parentEl, properties) {})`** accepts a handler function that will be called just before the `daily-js` [`createFrame()` call](https://docs.daily.co/reference/daily-js/factory-methods/create-frame). It accepts the same two parameters as the `createFrame` call itself does: a `parentEl` that the Prebuilt iframe will be inserted into, and a `properties` object containing the properties of the call frame to be created.

Your extension can modify those properties to add functionality. For example, the whiteboard extensions add objects to `properties.customTrayButtons` to add their open/close/pick buttons. Regardless of whether you modify them, your callback function needs to `return [parentEl, properties];` at the end, which will get passed to the next callback, and so on.

**`afterCreateFrame(fn(callObject) {})`** accepts a handler function that gets called just after the `daily-js` `createFrame()` call. Your handler function will get the newly-created call object as a parameter to the function. You'll see a fairly common pattern in extensions that need to use that call object later:

```javascript
let call;

daily.afterCreateFrame(async (c) => {
  call = c;
  // (other post-call setup)
});
```

This is called after the call object is created, but before the meeting is joined. You'll usually want to set up some event listeners here too:

```javascript
let call;

daily.afterCreateFrame(async (c) => {
  call = c;
  call.on("joined-meeting", (e) => {});
  call.on("app-message", (e) => {});
});
```

**`beforeJoin()` and `afterJoin()`** _(coming soon)_

These hooks will execute just before and after the top-level app calls `join()`. Keep in mind this is a different use case than waiting for the `"joined-meeting"` event, which be what you actually want. You can set up a listener for this event in the `afterCreateFrame()` function.

## Contributing

We'd be happy to have you contribute to Daily Extensions! To get started, check out our [Contributing Guide](CONTRIBUTING.md).
