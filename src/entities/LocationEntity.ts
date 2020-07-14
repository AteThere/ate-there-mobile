import {persist} from "mobx-persist";
import {IpApiComResponse} from "../functions/location-services/by-ip";
import {GpsLocationResponse} from "../functions/location-services/by-gps";
import idMaker from "../functions/idMaker";

export class LocationEntity {
    @persist lat?: number;
    @persist lon?: number;
    @persist street?: string;
    @persist city?: string;
    @persist state?: string;
    @persist zip?: string | number;
    @persist timezone?: string;

    constructor(street?: string, city?: string, state?: string, zip?: string | number) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    get name(): string {
        let name = this.street || '';

        if (this.city && this.state) {
            name += ' ' + this.city + ', ' + this.state;
        } else if (this.city) {
            name += ' ' + this.city;
        } else if (this.state) {
            name += ' ' + this.state;
        }

        if (this.zip) {
            name += ' ' + this.zip;
        }

        return name;
    }

    get id(): string {
        return idMaker([this.name, this.lat || '', this.lon || '']);
    }

    static fromIpApiCom(data: IpApiComResponse) {
        const location = new LocationEntity(
            '',
            data.city,
            data.regionName,
            data.zip
        );

        location.timezone = data.timezone;
        location.lat = data.lat;
        location.lon = data.lon;

        return location;
    }

    static fromGps(gps: GpsLocationResponse) {
        const location = new LocationEntity(
            gps.street,
            gps.city,
            gps.region,
            gps.postalCode
        );

        location.lat = gps.latitude;
        location.lon = gps.longitude;

        return location;
    }
}
