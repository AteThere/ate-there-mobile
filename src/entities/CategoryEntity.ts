import {persist} from "mobx-persist";
import get from 'lodash/get'

export class CategoryEntity {
    @persist id?: number;
    @persist name?: string;
    @persist slug?: string;
    @persist parent_id?: number;

    constructor(obj: {} = {}) {
        this.id = get(obj, 'id');
        this.name = get(obj, 'name');
        this.slug = get(obj, 'slug');
        this.parent_id = get(obj, 'parent_id');
    }
}