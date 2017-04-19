// src/app/components/albumDetail/index.js

// Import libraries for making the components
import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import { Card, CardSection, Button } from './../common/';
import styles from './styles';

// Make the component
const AlbumDetail = ({ album }) => {
  const { 
    title, 
    artist, 
    thumbnail_image, 
    image,
    url
  } = album;   // Destructuring passed in object

  const { 
    thumbnailContainerStyle,
    thumbnailStyle, 
    headerContentStyle,
    headerTextStyle,
    albumImageStyle
  } = styles;    // Destructuring styles

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            style={thumbnailStyle} 
            source={{ uri: thumbnail_image }} 
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image 
          style={albumImageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

// Make the component available to other parts of the app
export default AlbumDetail;
