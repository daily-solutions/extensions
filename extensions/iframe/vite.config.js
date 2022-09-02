// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/iframe.js"),
      name: "IframeExtension",
      // the proper extensions will be added
      fileName: "iframe",
    },
    rollupOptions: {
      external: ["@daily-labs/daily"],
      output: {
        globals: { "@daily-labs/daily": "DailyIframe" },
      },
    },
  },
});
