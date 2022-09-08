// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/miro.js"),
      name: "MiroExtension",
      // the proper extensions will be added
      fileName: "miro",
    },
    rollupOptions: {
      external: ["@daily-labs/daily"],
      output: {
        globals: { "@daily-labs/daily": "DailyIframe" },
      },
    },
  },
});
