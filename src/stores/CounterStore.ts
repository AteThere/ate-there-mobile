import {action, observable} from "mobx";

export class CounterStore {
    @observable count: number = 25;

    @action increment() {
        this.count++;
    }

    @action decrement() {
        this.count--;
    }
}

const counterStore = new CounterStore();
export default counterStore;