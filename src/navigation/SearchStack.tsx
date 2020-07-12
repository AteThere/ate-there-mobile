import * as React from 'react';
import {FunctionComponent} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from "../screens/tabs/SearchScreen";
import RestaurantDetailsScreen from "../screens/tabs/RestaurantDetailsScreen";

const Stack = createStackNavigator();

const SearchStack: FunctionComponent<{}> = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen name="Restaurant" component={RestaurantDetailsScreen}/>
    </Stack.Navigator>
);

export default SearchStack;
