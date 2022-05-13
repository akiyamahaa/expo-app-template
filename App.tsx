import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import ImageBgScreen from 'screens/ImageBgScreen';
/* 
  TODO: Native base: Done
  TODO: babel plugin resolver: Done
  TODO: React Navigation
  TODO: Redux Toolkit
  TODO: Firebase
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
    <NativeBaseProvider config={config}>
      <StatusBar style="auto" />
      <Box flex={1} bg="#fff">
        <ImageBgScreen />
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
