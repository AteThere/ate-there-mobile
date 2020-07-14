import axios from 'axios';

export type IpApiComResponse = {
    city: string;
    lat: number;
    lon: number;
    regionName: string;
    timezone: string,
    zip: number,
}

export const getExternalIpAddress = async () => {
    const {data} = await axios.get('https://api.ipify.org/?format=json');
    const {ip} = data;
    return ip;
};

export const getLocationDataByIp = async (ip: string): Promise<IpApiComResponse> => {
    const {data} = await axios.get('http://ip-api.com/json/' + ip);
    return data;
};
