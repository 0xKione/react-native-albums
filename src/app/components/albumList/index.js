// src/app/components/albumList/index.js

// Import libraries for making the components
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import firebase from 'firebase';

import AlbumDetail from '../albumDetail/';
import { Button } from '../common/';

// Make the components
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ albums: responseData });
      });
  }

  logout() {
    firebase.auth().signOut();
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        <Button onPress={this.logout}>
          Log Out
        </Button>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// Make the component available to other parts of the app
export default AlbumList;
