import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { RootStackProps } from '../navigation/Root';

type Props = {};

const About = (props: Props) => {
  const navigation = useNavigation<RootStackProps['navigation']>();
  return (
    <View>
      <Text>This is About page</Text>
      <Button mt={5} onPress={() => navigation.navigate('Home')}>
        Click to Home
      </Button>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
