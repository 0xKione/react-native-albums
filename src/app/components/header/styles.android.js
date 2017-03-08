// src/app/components/header/styles.android.js

// Import the dependencies of the style sheet
import React, { StyleSheet } from 'react-native';

// Create the style sheet
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderColor: 'rgba(0,0,0,0.15)',
    borderBottomWidth: 2,
    elevation: 2,
    position: 'relative'
  },
  text: {
    fontSize: 20
  }
});

// Make the style sheet available to other parts of the app
export default styles;
