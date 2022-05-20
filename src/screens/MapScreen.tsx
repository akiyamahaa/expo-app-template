import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { Box } from 'native-base';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

type Props = {};

const MapScreen = (props: Props) => {
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
          description="This is test descrip"
        />
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
});
