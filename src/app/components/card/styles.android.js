// src/app/components/card/styles.android.js

// Import the dependencies of the style sheet
import React, { StyleSheet } from 'react-native';

// Create the style sheet
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDD',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.15)',
    elevation: 1,
    marginHorizontal: 5,
    marginTop: 10
  }
});

// Make the style sheet available to other parts of the app
export default styles;