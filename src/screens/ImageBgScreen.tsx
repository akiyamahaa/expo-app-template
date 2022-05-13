import { ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';
import { Box, Icon, Text } from 'native-base';
import { Entypo } from '@native-base/icons';
import ImgBgLayout from '../components/ImgBgLayout';
import LinearBox from '../components/LinearBox';


const ImageBgScreen = () => {
  return (
    <ImgBgLayout>
      <Text>This is text image</Text>
      {/* Linear Example */}
      <LinearBox />
      {/* Icon Example */}
      <Icon as={Entypo} name="user" size={24}></Icon>
    </ImgBgLayout>
  );
};

export default ImageBgScreen;

const styles = StyleSheet.create({});
