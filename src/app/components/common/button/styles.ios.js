// src/app/components/common/button/styles.ios.js

// Import the dependencies of the style sheet
import { StyleSheet } from 'react-native';

// Create the style sheet
const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginHorizontal: 5
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10
  }
});

// Make the style sheet available to other parts of the app
export default styles;
