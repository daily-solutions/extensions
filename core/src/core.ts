import DailyIframe, { DailyCall, DailyCallOptions } from "@daily-co/daily-js";

//@ts-ignore
import callstate from "./callstate.js";
//@ts-ignore
import flexpanel from "./flexpanel.js";
//@ts-ignore
import iframe from "./iframe.js";
//@ts-ignore
import socketiostate from "./socketiostate.js";

type DailyExtension = {
  configure?: (options: any) => void;
  beforeCreateFrame?: (
    parentEl: HTMLElement,
    properties: any
  ) => [HTMLElement, any];
  afterCreateFrame?: (dailyCall: DailyCall) => void;
};

type DailyExtensionConfig =
  | DailyExtension
  | { extension: DailyExtension; config: any };

type ExtensionCallOptions = DailyCallOptions & {
  dailyConfig?: { extensions?: [] | DailyExtensionConfig[] };
};

function createFrame(parentEl: HTMLElement, properties: ExtensionCallOptions) {
  const { dailyConfig = {} } = properties;

  const extensions = Array.isArray(dailyConfig.extensions)
    ? dailyConfig.extensions
    : [];

  // Hack to make the API look nicer. Daily will complain
  // if this field is on dailyConfig.
  delete properties.dailyConfig?.extensions;

  console.log("extensions: ", extensions);

  extensions.forEach((extension) => {
    const ext = "extension" in extension ? extension.extension : extension;

    if ("config" in extension && ext.configure) {
      ext.configure(extension.config);
    }

    if (ext.beforeCreateFrame) {
      [parentEl, properties] = ext.beforeCreateFrame(parentEl, properties);
    }
  });

  const call = DailyIframe.createFrame(parentEl, properties);

  extensions.forEach((extension) => {
    const ext = "extension" in extension ? extension.extension : extension;

    if (ext.afterCreateFrame) {
      ext.afterCreateFrame(call);
    }
  });

  return call;
}

export default {
  createFrame,
  callstate,
  flexpanel,
  iframe,
  socketiostate,
};
