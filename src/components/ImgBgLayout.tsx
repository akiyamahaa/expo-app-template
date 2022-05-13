import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { Box, Icon } from 'native-base';

interface Props {
  children: ReactNode;
  imageUrl?: string;
}

const ImgBgLayout = (props: Props) => {
  return (
    <Box flex={1}>
      <ImageBackground
        source={require('../../assets/icon.png')}
        style={{ flex: 1 }}
      />
      <Box position={'absolute'} mt="5" height={'100%'} width={'100%'}>
        <Box flex={1}>{props.children}</Box>
      </Box>
    </Box>
  );
};

export default ImgBgLayout;

const styles = StyleSheet.create({});
