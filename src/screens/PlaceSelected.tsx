import { Alert, Dimensions, StyleSheet, View, Permission } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Button, Icon, Image, Text } from 'native-base'
import { FontAwesome } from '@native-base/icons';
import * as Location from 'expo-location'

const PlaceSelected = () => {
    const win = Dimensions.get('screen');
    const [location, setLocation] = useState<any>(null);
    const [errorMsg, setErrorMsg] = useState<any>(null);

    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            Alert.alert(
                "Permission denied",
                "Allow the app to use location service.",
                [{ text: "OK" }],
                { cancelable: false }
            )
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({})
        if (location) {
            setLocation(location)
        }
    }

    useEffect(() => {
        getCurrentLocation()
    }, [])

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    }

    return (
        <Box style={{ flex: 1, backgroundColor: '#eee' }}>
            <Box>
                <Image source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                }} alt="Alternate Text" style={{
                    width: win.width,
                    height: 300,
                    resizeMode: 'stretch'
                }} />
            </Box>
            <Box alignItems={'center'} m='5'>
                <Button
                    leftIcon={<Icon as={FontAwesome} name="check-square-o" color="white" />}
                    colorScheme="lightBlue"
                    width={200}
                >
                    Check in
                </Button>
                {location ? (
                    <Box mt='5'>
                        <Text>
                            Latitude: {location.coords.latitude}
                        </Text>
                        <Text>
                            Longitude: {location.coords.longitude}
                        </Text>
                    </Box>
                ) : <Text>{text}</Text>}
            </Box>
        </Box>
    )
}

export default PlaceSelected

const styles = StyleSheet.create({
    imageStyle: {
    },
})