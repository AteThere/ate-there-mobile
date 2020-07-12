import axios, {AxiosInstance} from 'axios';

const baseURL = 'https://ate-there-api.herokuapp.com/';

const client: AxiosInstance = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json'
    },
});

export default client;