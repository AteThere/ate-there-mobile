import axios, {AxiosInstance} from 'axios';

const baseURL = 'https://ate-there-api.herokuapp.com/';
const config = {
    baseURL,
    headers: {
        Accept: 'application/json',
    },
}
const client: AxiosInstance = axios.create(config);

export default client;