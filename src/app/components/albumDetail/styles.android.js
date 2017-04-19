// src/app/components/albumDetail/styles.android.js

// Import the dependencies of the style sheet
import React, { StyleSheet } from 'react-native';

// Create the style sheet
const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

// Make the style sheet available to other parts of the app
export default styles;
