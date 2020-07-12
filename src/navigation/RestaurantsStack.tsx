import * as React from 'react';
import {FunctionComponent} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RestaurantDetailsScreen from "../screens/tabs/RestaurantDetailsScreen";
import RestaurantsScreen from "../screens/tabs/RestaurantsScreen";

const Stack = createStackNavigator();

const RestaurantsStack: FunctionComponent<{}> = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Restaurants" component={RestaurantsScreen}/>
        <Stack.Screen name="Restaurant" component={RestaurantDetailsScreen}/>
    </Stack.Navigator>
);

export default RestaurantsStack;
