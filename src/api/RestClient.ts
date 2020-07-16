import jwtStorage from "../functions/JwtStorage";
import client from "./client";
import AsyncStorage from "@react-native-community/async-storage";

class RestClient {
    async getCached(uri: string, params: {} = {}) {
        const key = 'CACHE_GET_' + uri + JSON.stringify(params);
        console.log('key', key)
        const cached = await AsyncStorage.getItem(key);
        let data;
        if (!cached) {
            data = await this.get(uri, params);
            await AsyncStorage.setItem(key, JSON.stringify(data));
        } else {
            data = JSON.parse(cached);
        }
        return data;
    }

    async get(uri: string, params: {} = {}) {
        const jwt = await jwtStorage.get();

        console.log('params', params)
        const config = {
            params,
            headers: {
                Authorization: 'Bearer ' + jwt,
            }
        };

        try {
            const {data} = await client.get(uri, config);
            return data;
        } catch (e) {
            if (e.response && e.response.data && e.response.data) {
                return e.response.data
            } else {
                throw e;
            }
        }
    }
}

const restClient = new RestClient();
export default restClient;