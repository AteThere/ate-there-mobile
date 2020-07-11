import {action, observable} from "mobx";
import {persist} from "mobx-persist";

export class CounterStore {
    @persist @observable count: number = 25;

    @action increment() {
        this.count++;
    }

    @action decrement() {
        this.count--;
    }
}
