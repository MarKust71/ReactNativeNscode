import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main } from 'app/main/Main';

const MainStack = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Main" component={Main} options={{ headerTitleStyle: { alignSelf: 'center' } }} />
        </MainStack.Navigator>
    );
};
