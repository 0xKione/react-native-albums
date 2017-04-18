// src/app/components/card/index.js

// Import libraries for making the components
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

// Make the component
const Button = (props) => {
  const { button, buttonText } = styles;
  const { onPress, children } = props;

  return (
    <TouchableOpacity onPress={onPress} style={button}>
      <Text style={buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

// Make the component available to other parts of the app
export { Button };
