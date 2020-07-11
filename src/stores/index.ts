import {createContext, useContext} from 'react';
import {CounterStore} from "./CounterStore";
import {create} from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';

export const stores = {
    counterStore: new CounterStore(),
};

export const StoreContext = createContext(stores);
export const useStore = () => {
    return useContext(StoreContext);
};

export async function hydrateStores() {
    const hydrate = create({
        storage: AsyncStorage,
        jsonify: true
    })

    const promises = Object.keys(stores).map(storeName => {
        // @ts-ignore
        const store = stores[storeName];

        return hydrate(storeName, store)
            .then(() => console.log(`${storeName} has been hydrated`))
            .catch(e => console.error(`Issue hydrating ${storeName}`));
    });

    return Promise.all(promises);
}

