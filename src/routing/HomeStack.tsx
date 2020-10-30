import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from 'app/main/Home';

const HomeStack = createStackNavigator();

export const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen options={{ headerTitleStyle: { alignSelf: 'center' } }} name="Home" component={Home} />
        </HomeStack.Navigator>
    );
};
