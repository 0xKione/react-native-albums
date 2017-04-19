// src/app/components/common/header/styles.ios.js

// Import the dependencies of the style sheet
import { StyleSheet } from 'react-native';

// Create the style sheet
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

// Make the style sheet available to other parts of the app
export default styles;
