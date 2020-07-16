import {action, computed, observable} from "mobx";
import {persist} from "mobx-persist";
import {CategoryEntity} from "../entities/CategoryEntity";
import restClient from "../api/RestClient";
import jwtStorage from "../functions/JwtStorage";

export class CategoryStore {
    @persist('object', CategoryEntity) @observable current: CategoryEntity = new CategoryEntity();
    @persist('map', CategoryEntity) @observable collection: Map<number, CategoryEntity> = new Map<number, CategoryEntity>();

    @computed get asArray() {
        const list = Array.from(this.collection.values());
        if (list.length === 0) {
            this.download().catch(console.info);
        }

        return list;
    }

    @computed get restaurants() {
        return this.asArray.filter(category => category.parent_id === 991);
    }

    @action setCategory(category: CategoryEntity) {
        this.current = category;
    }

    @action
    async download() {
        const jwt = await jwtStorage.get();
        if (!jwt) {
            return;
        }
        const data: Array<{ id: number }> = await restClient.get('/categories/all');
        const map = new Map<number, CategoryEntity>();
        data.forEach(datum => map.set(datum.id, new CategoryEntity(datum)));
        this.collection = map;
    }
}

