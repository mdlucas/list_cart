
module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    setupFiles: [
        "./node_modules/react-native-gesture-handler/jestSetup.js"
    ],
    transformIgnorePatterns: [
      "node_modules/(?!(react-native"
        + "|react-navigation-tabs"
        + "|react-native-vector-icons"
        + "|react-native-iphone-x-helper"
        + "|@react-navigation"
        + "|react-native-gesture-handler"
      + ")/)",
    ],
  }