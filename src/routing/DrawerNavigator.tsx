import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from 'app/drawer/DrawerContent';
import { MainStackNavigator } from 'routing/MainStackNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={({ navigation }) => {
                return <DrawerContent navigation={navigation} />;
            }}
        >
            <Drawer.Screen name="Main" component={MainStackNavigator} />
        </Drawer.Navigator>
    );
};
