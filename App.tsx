import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/Root';
import CrudFirebase from './src/screens/CrudFirebase';

/* 
  TODO: Native base: Done
  TODO: React Navigation: Done
  TODO: Firebase
  TODO: Redux Toolkit
  TODO: MAP
  TODO: expo sqlite(option)
  TODO: babel plugin resolver
*/

const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider config={config}>
        <StatusBar style="auto" />
        <Box flex={1} bg="#fff">
          <CrudFirebase />
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
