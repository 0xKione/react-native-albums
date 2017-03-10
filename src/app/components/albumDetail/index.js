// src/app/components/albumDetail/index.js

// Import libraries for making the components
import React from 'react';
import { View, Text, Image } from 'react-native';

import Card from './../card/';
import CardSection from './../cardSection/';
import styles from './styles';

// Make the component
const AlbumDetail = ({ album }) => {
  const { 
    title, 
    artist, 
    thumbnail_image, 
    image 
  } = album;   // Destructuring passed in object

  const { 
    thumbnail, 
    headerContent,
    headerText,
    thumbnailContainer,
    albumImage
  } = styles;    // Destructuring styles

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image 
            style={thumbnail} 
            source={{ uri: thumbnail_image }} 
          />
        </View>
        <View style={headerContent}>
          <Text style={headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image 
          style={albumImage}
          source={{ uri: image }}
        />
      </CardSection>
    </Card>
  )
};

// Make the component available to other parts of the app
export default AlbumDetail;