import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from 'app/home/Home';
import { ShowToken } from 'app/home/ShowToken';

const HomeStack = createStackNavigator();

export const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen options={{ headerTitleStyle: { alignSelf: 'center' } }} name="Home" component={Home} />
            <HomeStack.Screen
                options={{ headerTitleStyle: { alignSelf: 'center' } }}
                name="ShowToken"
                component={ShowToken}
            />
        </HomeStack.Navigator>
    );
};
