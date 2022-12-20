import DailyIframe, { DailyCall, DailyCallOptions } from "@daily-co/daily-js";

import callstate from "./callstate.js";

function createFrame(parentEl, properties) {
  const { dailyConfig = {} } = properties;

  const extensions = Array.isArray(dailyConfig.extensions)
    ? dailyConfig.extensions
    : [];

  // Hack to make the API look nicer. Daily will complain
  // if this field is on dailyConfig.
  delete properties.dailyConfig?.extensions;

  console.log("extensions: ", extensions);

  // configure core components

  // now handle registered extensions
  extensions.forEach((extension) => {
    const ext = "extension" in extension ? extension.extension : extension;

    if ("config" in extension && ext.configure) {
      ext.configure(extension.config);
    }

    if (ext.beforeCreateFrame) {
      [parentEl, properties] = ext.beforeCreateFrame(parentEl, properties);
    }
  });

  const dailyCall = DailyIframe.createFrame(parentEl, properties);
  console.log(
    "updateCustomIntegrations function is: ",
    dailyCall.updateCustomIntegrations
  );

  // configure core components
  callstate.afterCreateFrame(dailyCall);

  extensions.forEach((extension) => {
    const ext = "extension" in extension ? extension.extension : extension;

    if (ext.afterCreateFrame) {
      ext.afterCreateFrame(dailyCall);
    }
  });

  Object.assign(dailyCall, callstate.instanceMethods);

  return dailyCall;
}

export default {
  createFrame,
};
