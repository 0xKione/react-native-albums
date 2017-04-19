// src/app/components/common/header/index.js

// Import libraries for making the components
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

// Make the components
const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  const { headerText } = props;

  return (  
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

// Make the component available to other parts of the app
export { Header };
