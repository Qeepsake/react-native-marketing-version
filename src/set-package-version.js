import chalk from "chalk";
import fs from "fs";
import path from "path";

/**
 * Sets the version in the package.json file.
 *
 * @param {string} versionText - the version to set.
 * @returns name of the package.
 */
export function setPackageVersion(versionText) {
  const pathToPackageJson = "./package.json";
  let packageJSON = null;
  try {
    packageJSON = JSON.parse(fs.readFileSync(pathToPackageJson));
    console.log(
      chalk.yellow(
        `Will set package version to ${chalk.bold.underline(versionText)}`
      )
    );
    packageJSON.version = versionText;
    fs.writeFileSync(
      pathToPackageJson,
      `${JSON.stringify(packageJSON, null, "\t")}\n`
    );
    console.log(
      chalk.green(`Version replaced in ${chalk.bold("package.json")}`)
    );
  } catch (err) {
    console.log(
      chalk.red(
        `${chalk.bold.underline(
          "ERROR:"
        )} Cannot find file with name ${path.resolve(pathToPackageJson)}`
      )
    );
    process.exit(1);
  }
  return packageJSON;
}
