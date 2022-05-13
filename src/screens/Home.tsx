import { StyleSheet, Text, View } from 'react-native';
import { Box, Button } from 'native-base';

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackProps } from '../navigation/Root';

type Props = {};
const Home = (props: Props) => {
  const navigation = useNavigation<RootStackProps['navigation']>();
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
    >
      <Button mt={5} onPress={() => navigation.navigate('About')}>
        Click to About
      </Button>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({});
