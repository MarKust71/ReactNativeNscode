import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Home } from '../app/main/Home';

const Tabs = createBottomTabNavigator();

export const TabsNavigator = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} />
        </Tabs.Navigator>
    );
};
