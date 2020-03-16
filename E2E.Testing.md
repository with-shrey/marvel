# Setting Up Detox for End To End Test

## Resources
- Types of Testing
  https://itnext.io/react-redux-integration-tests-with-jest-enzyme-df9aa6effd13
- Unit Testing Redux Sagas
  https://dev.to/phil/the-best-way-to-test-redux-sagas-4hib
- E2E Test - Runs on Device Clicks are simulated by runner
  https://blog.logrocket.com/end-to-end-testing-in-react-native-with-detox/
- Setup of E2E on Android
  https://medium.com/@varunon9/e2e-testing-of-react-native-app-android-using-detox-a-step-by-step-guide-bfb520c1a9ac
- ENV Variable Setup to stop infinite animation
  https://blog.carbonfive.com/2016/09/29/setting-up-react-native-build-environments-using-nativemodules/

TIP: white test suites in different `.js` files and import them in a `.spec.js` file

## Sample Configuration for Attached Device
```
"android": {
        "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
        "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
        "type": "android.attached",
        "name": "DXEDU17C15001365"
      }
```
## Sample Configuration for Emulated Device
```
"android.emu.debug": {
        "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
        "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
        "type": "android.emulator",
        "name": "Nexus_4_API_23"
      },
```

## Running E2E Tests
- Need to update `configurations` in package.json for your device;
    Run `adb devices` and paste the id into name
- Sequence of command is :
    1. `npm start` - On a seperate terminal to build a js bundle
    2. `npm run e2e:build` - Build a testing APK;
    3. `npm run e2e` - Install and run test suite on android device;

