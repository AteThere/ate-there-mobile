import * as React from 'react';
import {FunctionComponent} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RestaurantDetailsScreen from "../screens/tabs/RestaurantDetailsScreen";
import UsersScreen from "../screens/tabs/UsersScreen";
import UserDetailsScreen from "../screens/tabs/UserDetailsScreen";

const Stack = createStackNavigator();

const UsersStack: FunctionComponent<{}> = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Users" component={UsersScreen}/>
        <Stack.Screen name="User" component={UserDetailsScreen}/>
        <Stack.Screen name="Restaurant" component={RestaurantDetailsScreen}/>
    </Stack.Navigator>
);

export default UsersStack;
