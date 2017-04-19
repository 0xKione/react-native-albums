// src/app/components/common/card/index.js

// Import libraries for making the components
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

// Make the component
const Card = (props) => {
  const { containerStyle } = styles;

  return (
    // Using props.children will render whatever is between the <Card> tags
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

// Make the component available to other parts of the app
export { Card };
