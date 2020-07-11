import * as React from 'react';
import {FunctionComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import CounterScreen from "../screens/CounterScreen";

const Stack = createStackNavigator();

const Navigation: FunctionComponent<{}> = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Counter" component={CounterScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigation;
