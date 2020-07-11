import {createContext, useContext} from 'react';
import {CounterStore} from "./CounterStore";
import {create} from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';

const hydrate = create({
    storage: AsyncStorage,
    jsonify: true
})

export const store = {
    counterStore: new CounterStore(),
};

// @ts-ignore
Object.keys(store).map(storeName => hydrate(storeName, store[storeName]).then(() => console.log(`${storeName} has been hydrated`)));

export const StoreContext = createContext(store);
export const useStore = () => {
    return useContext(StoreContext);
};
