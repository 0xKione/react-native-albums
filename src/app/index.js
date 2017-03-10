// src/app/index.js

// Import libraries to help create a component
import React from 'react';
import { Text, View } from 'react-native';

import Header from './components/header/';
import AlbumList from './components/albumList/';
import styles from './styles';   // Get styles from platform dependent file

// Create the main component
const App = () => {
  // Need to have a flex: 1 style on the root view when using a ScrollView

  return (
    <View style={{ flex: 1 }}>
      <Header text={'Albums'} />
      <AlbumList />
    </View>
  );
};

// Make the main component available to the rendering files
export default App;
