// src/app/components/header/index.js

// Import libraries for making the components
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

// Make the components
const Header = (props) => {
  const { view, text } = styles;

  return (  
    <View style={view}>
      <Text style={text}>{props.text}</Text>
    </View>
  );
};

// Make the component available to other parts of the app
export { Header };
