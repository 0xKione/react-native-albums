// src/app/components/card/index.js

// Import libraries for making the components
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

// Make the component
const Card = (props) => (
  // Using props.children will render whatever is between the <Card> tags
  <View style={styles.container}>
    {props.children}
  </View>
);

// Make the component available to other parts of the app
export { Card };
