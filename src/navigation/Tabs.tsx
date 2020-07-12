import React, {ComponentClass} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabsConfig} from "../screens/tabs/tabsConfig";
import AppFooter from "../components/AppFooter";

const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator tabBar={props => <AppFooter {...props} />}>
        {tabsConfig.map(({title, component}) => (
            <Tab.Screen
                name={title}
                component={component as ComponentClass}
            />
        ))}
    </Tab.Navigator>
);

export default Tabs;
