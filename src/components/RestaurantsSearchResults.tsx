import RestaurantsList from "./RestaurantsList";
import {useStore} from "../stores";
import React, {FunctionComponent, useEffect, useState} from "react";
import {SearchData} from '../stores/SearchStore'

const RestaurantsSearchResults: FunctionComponent<{}> = () => {
    const {searchStore} = useStore();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        setData([]);
        searchStore.search()
            .then((response: SearchData) => {
                // @ts-ignore
                setData(response.places || [])
            })
            .finally(() => setIsLoading(false))
    }, [searchStore.location, searchStore.category]);
    return (
        <RestaurantsList isLoading={isLoading} data={data}/>
    );
};

export default RestaurantsSearchResults;