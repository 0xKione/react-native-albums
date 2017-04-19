// src/app/components/common/input/index.js

import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './styles';

const Input = (props) => {
  const { secureTextEntry, label, placeholder, value, onChangeText } = props;
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

export { Input };
