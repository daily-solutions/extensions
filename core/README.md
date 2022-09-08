# Daily Extensions: Core

The `/core` folder contains the Core module that powers Daily Extensions. That module does two things:

1. Wraps around some existing daily-js functions, such as `createFrame`, to provide hooks for Extension code
2. Exposes a few 'helper' modules that can be used for common Extension design patterns

## Try it now

The best way to understand Extensions is to start with Daily's standard Prebuilt HTML example:

```
<html>
  <script crossorigin src="https://unpkg.com/@daily-co/daily-js"></script>
  <body>
	<script>
	  callFrame = window.DailyIframe.createFrame({
	  	url: 'DAILY_ROOM_URL'
	  });
	  callFrame.join();
	</script>
  </body>
</html>
```

To use Extensions, you change that example just a bit. For example, to use the `iframe` helper/extension:

```
<html>
  <body onload="main()">
	<div id="dailyContainer"></div>
	<script type="module">
	  import DailyIframe from "https://unpkg.com/@daily-labs/extensions";

	  window.main = async function main() {
		const parentEl = document.getElementById("dailyContainer");
		const call = DailyIframe.createFrame(parentEl, {
		  url: 'DAILY_ROOM_URL',
		  dailyConfig: {
			extensions: [DailyIframe.iframe],
		  },
		});
		await call.join();
	  };
	</script>
  </body>
</html>
```

## Build your own Extensions

TBD

## Contribute to the Core module

From the `core` directory, you can run `npm run build` to generate files into `/dist` to test with. I've been using `npx http-server -c-1 -p 8080` to serve files locally, as I've had issues with vite's hot-reloading of the module code.
