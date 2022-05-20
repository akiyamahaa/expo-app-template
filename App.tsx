import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './src/screens/MapScreen';

/* 
  TODO: Native base: Done
  TODO: React Navigation: Done
  TODO: Firebase Basic: Done
  TODO: Firebase Auth
  TODO: MAP
  TODO: Redux Toolkit
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
        <SafeAreaView style={styles.container}>
          <MapScreen />
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
