import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Box, Image } from 'native-base';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { RootStackProps } from '@navigation/Root';

type Props = {};

const MapScreen = (props: Props) => {
  const navigation = useNavigation<RootStackProps['navigation']>();
  const pressCallOut = () => {
    navigation.navigate('PlaceSelected')
  }
  return (
    <Box style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78,
          longitude: -122,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78,
            longitude: -122,
          }}
          title="Test Title"
          description="This is test description"
        >
          <Callout tooltip onPress={pressCallOut}>
            <Box style={styles.bubble}>
              <Box>
                <Image source={{
                  uri: "https://wallpaperaccess.com/full/317501.jpg"
                }} alt="Alternate Text" size="xl" style={styles.imageStyle} />
              </Box>
              <Box style={styles.textContainer}>
                <Text style={styles.name}>Favourite Location</Text>
                <Text>A short description</Text>
              </Box>
            </Box>
          </Callout>
        </Marker>
      </MapView>
    </Box>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: '#ccc',
  },
  imageStyle: {
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  textContainer: {
    padding: 12
  },
  name: {

  }
});
