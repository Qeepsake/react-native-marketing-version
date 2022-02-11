import chalk from "chalk";
import fs from "fs";

/**
 * Sets the Android marketing version in the AndroidManifest.xml and build.gradle files
 * i.e. versionName field.
 *
 * @param {string} versionText - the version to set.
 */
export async function setAndroidMarketingVersion(versionText) {
  const androidManifestPath = "./android/app/src/main/AndroidManifest.xml";
  const buildGradlePath = "./android/app/build.gradle";

  console.log(
    chalk.yellow(
      `Will set Android version name to ${chalk.bold.underline(versionText)}`
    )
  );
  console.log("-------------------------------------------------------");

  const buildGradle = fs.readFileSync(buildGradlePath, "utf8");
  const newBuildGradle = buildGradle.replace(
    /versionName "[^"]*"/g,
    `versionName "${versionText}"`
  );
  fs.writeFileSync(buildGradlePath, newBuildGradle, "utf8");
  console.log(chalk.green(`Version replaced in ${chalk.bold("build.gradle")}`));

  const androidManifest = fs.readFileSync(androidManifestPath, "utf8");
  if (androidManifest.includes("android:versionName")) {
    const newAndroidManifest = androidManifest.replace(
      /android:versionName="[^"]*"/g,
      `android:versionName="${versionText}"`
    );
    fs.writeFileSync(androidManifestPath, newAndroidManifest, "utf8");
    console.log(
      chalk.green(`Version replaced in ${chalk.bold("AndroidManifest.xml")}`)
    );
  }
}
