import {getExternalIpAddress, getLocationDataByIp} from "./by-ip";
import {askPhoneLocationPermission, getPhoneLocation, shouldAskPhoneLocationPermission} from "./by-gps";
import {LocationEntity} from "../../entities/LocationEntity";
import * as Location from 'expo-location';

const getByIp = async (): Promise<LocationEntity> => {
    const ip = await getExternalIpAddress();
    const location_data = await getLocationDataByIp(ip);

    return LocationEntity.fromIpApiCom(location_data);
};

const getByGps = async (): Promise<LocationEntity> => {
    const shouldAsk = await shouldAskPhoneLocationPermission();
    if (shouldAsk) {
        await askPhoneLocationPermission();
    }
    const location_data = await getPhoneLocation();

    return LocationEntity.fromGps(location_data);
};

const getGeo = async (address: string) => {
    const coords = await Location.geocodeAsync(address);
    if (coords.length === 0) {
        return [];
    }

    let batch: LocationEntity[] = [];
    const promises = coords.map(async (coord) => {
        const addresses = await Location.reverseGeocodeAsync(coord);
        return addresses.map(async (address) => {
            const location = LocationEntity.fromGps({...coord, ...address});
            batch.push(location);
            return location;
        });
    })
    await Promise.all(promises);
    return batch;
};

export default {getByIp, getByGps, getGeo}