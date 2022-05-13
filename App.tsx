import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation/Root';

/* 
  TODO: Native base: Done
  TODO: babel plugin resolver: Done
  TODO: React Navigation: Done
  TODO: Redux Toolkit
  TODO: Firebase
  TODO: expo sqlite
  TODO: MAP
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
          <Root />
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
