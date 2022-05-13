import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
/* TODO: React Navigation
   TODO: Redux Toolkit
   TODO: Firebase
   TODO: MAP
   TODO: babel plugin resolver
   TODO: Native base
*/
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
