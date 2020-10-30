import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from 'routing/DrawerContent';
import { SignIn } from 'app/authentication/SignIn';
import { Home } from 'app/home/Home';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={() => <DrawerContent />}>
            <Drawer.Screen name="Welcome" component={SignIn} />
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
};
