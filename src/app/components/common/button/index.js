// src/app/components/common/button/index.js

// Import libraries for making the components
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

// Make the component
const Button = (props) => {
  const { buttonStyle, buttonTextStyle } = styles;
  const { onPress, children } = props;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={buttonTextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

// Make the component available to other parts of the app
export { Button };
