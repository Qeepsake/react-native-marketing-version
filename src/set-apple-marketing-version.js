import chalk from "chalk";
import plist from "plist";
import fs from "fs";

/**
 * Sets the CFBundleShortVersionString version in the Info.plist file.
 *
 * @param {string} versionText - the version to set.
 * @param {string} appName - the name of the app.
 */
export async function setAppleMarketingVersion(versionText, appName) {
  const infoPlistPath = "./ios/<APP_NAME>/Info.plist".replace(
    "<APP_NAME>",
    appName
  );

  console.log(
    chalk.yellow(
      `Will set CFBundleShortVersionString to ${chalk.bold.underline(
        versionText
      )}`
    )
  );
  const plistInfo = plist.parse(fs.readFileSync(infoPlistPath, "utf8"));
  plistInfo.CFBundleShortVersionString = versionText;
  fs.writeFileSync(infoPlistPath, plist.build(plistInfo), "utf8");
  console.log(chalk.green(`Version replaced in ${chalk.bold("Info.plist")}`));
}
