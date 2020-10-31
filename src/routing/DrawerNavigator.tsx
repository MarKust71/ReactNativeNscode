import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeTabsNavigator } from 'routing/HomeTabsNavigator';
import { MainTabsNavigator } from 'routing/MainTabsNavigator';
import { DrawerContent } from 'app/drawer/DrawerContent';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={({ navigation }) => {
                return <DrawerContent navigation={navigation} />;
            }}
        >
            <Drawer.Screen name="Home" component={HomeTabsNavigator} />
            <Drawer.Screen name="Main" component={MainTabsNavigator} />
        </Drawer.Navigator>
    );
};
