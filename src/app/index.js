// src/app/index.js

// Import libraries to help create a component
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Spinner } from './components/common/';
import LoginForm from './components/loginForm/';
import AlbumList from './components/albumList/';
import styles from './styles';   // Get styles from platform dependent file

// Create the main component
class App extends Component {
  // Initial value of null when we don't know if the user is logged in
  state = { loggedIn: null, headerText: 'Albums' };

  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyBxukNUcoXifAsuxGfuE2N9Lmc0cCWBmTU',
      authDomain: 'albums-4f0cb.firebaseapp.com',
      databaseURL: 'https://albums-4f0cb.firebaseio.com',
      projectId: 'albums-4f0cb',
      storageBucket: 'albums-4f0cb.appspot.com',
      messagingSenderId: '509529735601'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true, headerText: 'Albums' });
      } else {
        this.setState({ loggedIn: false, headerText: 'Log In' });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <AlbumList />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={this.state.headerText} />
        {this.renderContent()}
      </View>
    );
  }
}

// Make the main component available to the rendering files
export default App;
