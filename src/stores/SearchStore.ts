import {action, computed, observable} from "mobx";
import {persist} from "mobx-persist";
import LocationServices from "../functions/location-services";
import {isPhoneLocationPermissionGranted} from "../functions/location-services/by-gps";
import {isInternetReachable} from "../functions/network";
import {LocationEntity} from "../entities/LocationEntity";

const defaultLocation = new LocationEntity(
    '2719 morris ave.',
    'The Bronx',
    'NY',
    '10468'
);

export class SearchStore {
    @persist @observable category: string = '';
    @persist('object', LocationEntity) @observable location: LocationEntity = defaultLocation;

    @persist('map', LocationEntity) @observable _locationHistory: Map<string, LocationEntity> = new Map<string, LocationEntity>();

    @computed
    get locationHistory() {
        return Array.from(this._locationHistory.values()).reverse();
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
        if (this._locationHistory.size === 0) {
            const location = await this.inferLocation();
            this.setLocation(location);
        }
    }

    @action
    setLocation(location: LocationEntity) {
        if (this.location.id === location.id) {
            return;
        }
        this.location = location;
        if (this._locationHistory.has(location.id)) {
            this._locationHistory.delete(location.id);
        }
        this._locationHistory.set(location.id, location);
    }

    @action
    delLocation(location: LocationEntity) {
        this._locationHistory.delete(location.id)
    }
}

