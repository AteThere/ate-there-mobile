import {ReactNode} from "react";
import SearchStack from "../../navigation/SearchStack";
import RestaurantsStack from "../../navigation/RestaurantsStack";
import UsersStack from "../../navigation/UsersStack";

export type TabConfig = {
    title: string,
    iconName: string,
    component: ReactNode,
}

export const tabsConfig: Array<TabConfig> = [
    {
        title: 'Search',
        iconName: 'search',
        component: SearchStack,
    },
    {
        title: 'Locations',
        iconName: 'restaurant',
        component: RestaurantsStack,
    },
    {
        title: 'Users',
        iconName: 'people',
        component: UsersStack,
    }
];