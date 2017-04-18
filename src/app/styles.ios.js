// app/styles.ios.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // Need to have a flex: 1 style on the root view when using a ScrollView
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default styles;
