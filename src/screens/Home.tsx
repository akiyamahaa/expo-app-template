import { StyleSheet, Text, View } from 'react-native';
import { Box } from 'native-base';

import React from 'react';

const Home = () => {
  return (
    <Box
      style={{ flex: 1, backgroundColor: '#eee' }}
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          start: [0, 0],
          end: [1, 0],
        },
      }}
    ></Box>
  );
};

export default Home;

const styles = StyleSheet.create({});
