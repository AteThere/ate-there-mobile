import client from './client'

const authCall = async (uri, user) => {
    try {
        const response = await client.post(uri, user);
        const {data} = response;
        return data;
    } catch (e) {
        if (e.response && e.response.data && e.response.data) {
            return e.response.data
        } else {
            throw e;
        }
    }
};

export const login = async (email, password) => {
    return authCall('/auth/login', {email, password});
}

export const register = async (name, email, password) => {
    return authCall('/auth/register', {name, email, password});
}