import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { HomeStackNavigator } from 'routing/HomeStack';

const Tabs = createBottomTabNavigator();

export const TabsNavigator = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeStackNavigator} />
        </Tabs.Navigator>
    );
};
