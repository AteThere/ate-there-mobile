import {createContext, useContext} from 'react';
import {create} from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {CounterStore} from "./CounterStore";
import {AuthStore} from "./AuthStore";
import {SearchStore} from "./SearchStore";
import {CategoryStore} from "./CategoryStore";
import {LocationStore} from "./LocationStore";

export const stores = {
    counterStore: new CounterStore(),
    authStore: new AuthStore(),
    searchStore: new SearchStore(),
    categoryStore: new CategoryStore(),
    locationStore: new LocationStore(),
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

