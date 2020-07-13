import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from "./Tabs";
import React from "react";
import AppDrawer from "../components/AppDrawer";

const Drawer = createDrawerNavigator();

const DrawerNav = () => (
    <Drawer.Navigator drawerContent={() => <AppDrawer/>}>
        <Drawer.Screen name="Tabs" component={Tabs}/>
    </Drawer.Navigator>
);

export default DrawerNav;
