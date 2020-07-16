import {action, computed, observable} from "mobx";
import {persist} from "mobx-persist";
import {LocationEntity} from "../entities/LocationEntity";
import {isPhoneLocationPermissionGranted} from "../functions/location-services/by-gps";
import LocationServices from "../functions/location-services";
import {isInternetReachable} from "../functions/network";

const defaultLocation = new LocationEntity(
    '2719 morris ave.',
    'The Bronx',
    'NY',
    '10468'
);

export class LocationStore {
    @persist('object', LocationEntity) @observable current: LocationEntity = new LocationEntity();
    @persist('map', LocationEntity) @observable collection: Map<string, LocationEntity> = new Map<string, LocationEntity>();

    @computed get asArray() {
        return Array.from(this.collection.values()).reverse();
    }

    @action
    set(location: LocationEntity) {
        if (this.current.id === location.id) {
            return;
        }
        this.current = location;
        if (this.collection.has(location.id)) {
            this.collection.delete(location.id);
        }
        this.collection.set(location.id, location);
    }

    async inferLocation() {
        let location = defaultLocation;

        if (await isPhoneLocationPermissionGranted()) {
            location = await LocationServices.getByGps()
        }

        if (await isInternetReachable()) {
            location = await LocationServices.getByIp();
        }

        return location;
    }

    @action
    async setInferredLocation() {
        if (this.collection.size === 0) {
            const location = await this.inferLocation();
            this.set(location);
        }
    }

    @action
    remove(location: LocationEntity) {
        this.collection.delete(location.id)
    }
}

