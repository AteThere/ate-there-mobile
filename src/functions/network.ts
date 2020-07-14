import * as Network from "expo-network";

export const isInternetReachable = async () => {
    const {isInternetReachable} = await Network.getNetworkStateAsync();
    return isInternetReachable;
};
