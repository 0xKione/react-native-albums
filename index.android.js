// index.android.js

import React from 'react';
import { AppRegistry } from 'react-native';

import Albums from './app/';  // Needs trailing slash for some reason

AppRegistry.registerComponent('albums', () => Albums);
