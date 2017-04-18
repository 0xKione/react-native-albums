// src/app/index.js

// Import libraries to help create a component
import React, { Component } from 'react';
import { View } from 'react-native';

import { Header } from './components/common/';
import AlbumList from './components/albumList/';
import styles from './styles';   // Get styles from platform dependent file

// Create the main component
class App extends Component {
  render() {
    /*return (
      <View style={styles.container}>
        <Header text={'Albums'} />
        <AlbumList />
      </View>
    );*/

    return (
      <View style={styles.container}>
        <Header text={'Auth'} />
      </View>
    );
  }
}

// Make the main component available to the rendering files
export default App;
