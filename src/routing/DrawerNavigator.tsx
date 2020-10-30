import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from 'routing/DrawerContent';
import { SignIn } from 'app/main/SignIn';
import { Home } from 'app/main/Home';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={() => <DrawerContent />}>
            <Drawer.Screen name="Welcome" component={SignIn} />
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
};
