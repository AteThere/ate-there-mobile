import * as React from 'react';
import {FunctionComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogInScreen from "../screens/auth/LogInScreen";
import {useStore} from "../stores";
import {observer} from "mobx-react";
import RegisterScreen from "../screens/auth/RegisterScreen";
import DrawerNav from "./DrawerNav";

const Stack = createStackNavigator();

const Navigation: FunctionComponent<{}> = () => {
    const {authStore} = useStore();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {!authStore.isLoggedIn && (
                    <>
                        <Stack.Screen name="Register" component={RegisterScreen}/>
                        <Stack.Screen name="LogIn" component={LogInScreen} options={{
                            // When logging out, a pop animation feels intuitive
                            // You can remove this if you want the default 'push' animation
                            animationTypeForReplace: authStore.isLoggedIn ? 'pop' : 'push',
                        }}/>
                    </>
                )}
                {authStore.isLoggedIn && (
                    <Stack.Screen name={'DrawerScreen'} component={DrawerNav}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default observer(Navigation);
