import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Box } from 'native-base';

const LinearBox = () => {
  return (
    <Box
      width={200}
      height={200}
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
    >
    </Box>
  );
};

export default LinearBox;

const styles = StyleSheet.create({});
