// src/app/index.js

// Import libraries to help create a component
import React from 'react';
import { Text } from 'react-native';

import Header from './components/header/';
import styles from './styles';   // Get styles from platform dependent file

// Create the main component
const App = () => {
  return (
    <Header text={'Albums'} />
  );
};

// Make the main component available to the rendering files
export default App;
