// index.ios.js

import { AppRegistry } from 'react-native';

import App from './src/app/';  // Import module from src/app/index.js file

// Render the app to the device
AppRegistry.registerComponent('albums', () => App);
