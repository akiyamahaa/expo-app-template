import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import MapScreen from '@screens/MapScreen';
import PlaceSelected from '@screens/PlaceSelected';

type RootStackParamList = {
  Home: undefined;
  About: undefined;
  MapScreen: undefined;
  PlaceSelected: undefined;
};
export type RootStackProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

interface Props { }

const Root = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName="MapScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PlaceSelected" component={PlaceSelected} />
    </Stack.Navigator>
  );
};

export default Root;
