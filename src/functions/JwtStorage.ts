import AsyncStorage from '@react-native-community/async-storage';

class JwtStorage {
    persistence_key = 'JWT_KEY';

    get(): Promise<string | null> {
        return AsyncStorage.getItem(this.persistence_key)
    }

    set(jwt: string) {
        return AsyncStorage.setItem(this.persistence_key, jwt);
    }

    del() {
        return AsyncStorage.removeItem(this.persistence_key);
    }
}

const jwtStorage = new JwtStorage();
export default jwtStorage;
