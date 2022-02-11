# React Native Marketing Version

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This tool allows you to easily update the marketing version of a React Native application. Following files will be updated:

- **./package.json**
- **./android/app/src/main/AndroidManifest.xml**
- **./android/app/build.gradle**
- **./ios/<app_name>/Info.plist**
## Setup and Usage

There are two ways to install react-native-marketing-version: globally and locally.

### Local Installation

This is the recommended way to install react-native-marketing-version.

```bash
npm install @qeepsake/react-native-marketing-version --save-dev
-- or --
yarn add @qeepsake/react-native-marketing-version --dev
```

You can then use this command in your project directory to run react-native-marketing-version:

npm:

```bash
$ npm run set-version <version>
-- or --
$ yarn set-version <version>
```

### Global Installation

This installation method allows you to use react-native-marketing-version in any project.

```bash
npm install -g react-native-marketing-version
-- or --
yarn global add react-native-marketing-version
```

You can then use this command in your project directory to run react-native-marketing-version:

```bash
set-version <version>
```

## Behaviour

When invoked, react-native-marketing-version will make the following changes to your project files:

- The **version** attribute in `package.json` will be updated with the specified version.
- It will update the **version name** in both `build.gradle` and `AndroidManifest.xml`. `react-native-marketing-version` will only write in the `AndroidManifest.xml` if `android:versionName` is already in the file.
- It will update the **CFBundleShortVersionString** ("Version") in `Info.plist`.

## License

This software uses the [MIT license](LICENSE.txt).
