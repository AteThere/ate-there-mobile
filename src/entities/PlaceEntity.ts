import {persist} from "mobx-persist";

export class PlaceEntity {
    @persist id: string;
    @persist name: string;
    @persist yelp_uid?: string;
    @persist image_url?: string;
    @persist latitude?: string;
    @persist longitude?: string;
    @persist address1?: string;
    @persist address2?: string;
    @persist city?: string;
    @persist state?: string;
    @persist zip_code?: number;
    @persist phone?: string;
    @persist rating?: string;
    @persist review_count?: number;
    @persist price?: number;
    @persist yelp_url?: string;
    created?: Date;
    modified?: Date;

    constructor(attributes: { id: string, name: string }) {
        this.id = attributes.id;
        this.name = attributes.name
        Object.keys(attributes).forEach(key => {
            // @ts-ignore
            this[key] = attributes[key];
        });
    }
}