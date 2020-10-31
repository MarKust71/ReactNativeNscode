import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { HomeStackNavigator } from 'routing/HomeStack';
import { MainStackNavigator } from 'routing/MainStack';

const Tabs = createBottomTabNavigator();

type Props = {
    tab: string;
};

export const TabsNavigator = ({ tab }: Props) => {
    return (
        <Tabs.Navigator initialRouteName={tab}>
            <Tabs.Screen name="Home" component={HomeStackNavigator} />
            <Tabs.Screen name="Main" component={MainStackNavigator} />
        </Tabs.Navigator>
    );
};
