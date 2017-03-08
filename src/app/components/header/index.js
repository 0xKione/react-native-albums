// src/app/components/header/index.js

// Import libraries for making the components
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

// Make the components
const Header = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

// Make the component available to other parts of the app
export default Header;
