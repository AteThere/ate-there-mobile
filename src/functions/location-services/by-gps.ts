import * as ExpoLocation from 'expo-location';
import {Alert} from "react-native";

export interface GpsLocationResponse extends ExpoLocation.Address {
    latitude: number;
    longitude: number;
}

export const shouldAskPhoneLocationPermission = async () => {
    const hasServices = await ExpoLocation.hasServicesEnabledAsync();
    if (!hasServices) {
        return false;
    }

    const {canAskAgain, status} = await ExpoLocation.getPermissionsAsync();

    return canAskAgain && (status === 'undetermined')
};

export const isPhoneLocationPermissionGranted = async (): Promise<boolean> => {
    const {status} = await ExpoLocation.getPermissionsAsync();

    return status === 'granted'
};

export const askPhoneLocationPermission = async () => {
    Alert.alert(
        'Allow us to access your location?',
        'You will see another permission request from your phone',
        [
            {text: "OK", onPress: () => ExpoLocation.requestPermissionsAsync()},
            {
                text: "Ask me later",
                onPress: () => console.log("Ask me later pressed")
            },
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },

        ],
        {cancelable: false}
    );
};

export const getPhoneLocation = async (): Promise<GpsLocationResponse> => {
    const {coords} = await ExpoLocation.getCurrentPositionAsync({});
    const {latitude, longitude} = coords;
    const geos = await ExpoLocation.reverseGeocodeAsync({latitude, longitude});

    return {...geos[0], latitude, longitude};
};
