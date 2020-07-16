import {CategoryEntity} from "../entities/CategoryEntity";
import {LocationEntity} from "../entities/LocationEntity";
import {action, observable} from "mobx";
import {persist} from "mobx-persist";
import restClient from "../api/RestClient";
import {PlaceEntity} from "../entities/PlaceEntity";

export class SearchData {
    @persist('list', PlaceEntity) places: Array<PlaceEntity> = [];
    @persist total: number = 0;
}

export class SearchStore {
    @persist('object', LocationEntity) @observable location: LocationEntity = new LocationEntity();
    @persist('object', CategoryEntity) @observable category: CategoryEntity = new CategoryEntity();

    @observable collection: Map<string, SearchData> = new Map<string, SearchData>();

    @action
    setLocation(location: LocationEntity) {
        this.location = location;
    }

    @action
    setCategory(category: CategoryEntity) {
        this.category = category
    }

    buildSearchParams() {
        let params = {};

        if (this.location) {
            params = {...params, ...this.location.searchData}
        }
        console.log('this.category', this.category)
        if (this.category) {
            params = {...params, categories: this.category.slug}
        }

        return params;
    }

    async search(): Promise<SearchData> {
        const params = this.buildSearchParams();
        const data = await restClient.getCached('/search/places', params);
        return data as SearchData;
    }
}

