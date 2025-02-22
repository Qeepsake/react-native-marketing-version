#!/usr/bin/env node

import { setAndroidMarketingVersion } from "./set-android-marketing-version";
import { setAppleMarketingVersion } from "./set-apple-marketing-version";
import { setPackageVersion } from "./set-package-version";

(async function invoke() {
  const versionText = process.argv[2];
  const appName = setPackageVersion(versionText).name;
  console.log("-------------------------------------------------------");
  await setAndroidMarketingVersion(versionText);
  console.log("-------------------------------------------------------");
  await setAppleMarketingVersion(versionText, appName);
  console.log("-------------------------------------------------------");
})();
