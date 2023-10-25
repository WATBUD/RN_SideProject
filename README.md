# RN_SideProject

RN_SideProject

# Command Line Scripts

Go to the project folder in the `Terminal`, run the commands below for our daily development:

1. `yarn install`: install packages for both iOS and Android.
2. `yarn start`: to start [Metro](https://facebook.github.io/metro/), the JS bundler.

# config registry Command Line Scripts
npm config get registry
npm set registry https://registry.npmjs.org/
npm set registry https://npm.pkg.github.com/
npm set registry https://nexus.servnimo.com/repository/npm-public
yarn config get registry
yarn config set registry https://nexus.servnimo.com/repository/npm-public

# EAS Command Line
`eas build:list`: build record details

# Packaging process
1. `npm install -g expo-cli`: install expo-cli packages for System.
2. `npm install -g eas-cli`: Install the latest EAS CLI
3. `eas login`: Log in to your Expo account
4. `eas build:configure`: Configure the project
5. `eas build --platform android`: Build for android app ex:[eas build --platform ios,eas build --platform all]

# Packaging for apk
1. `npm install -g expo-cli`: install expo-cli packages for System.
2. `npm install -g eas-cli`: Install the latest EAS CLI
3. `eas login`: Log in to your Expo account
4. `eas build -p android --profile preview`: Now you can run your build with the following command:
5. `eas build:run -p android --latest`: Installing your build Emulator (virtual device)



