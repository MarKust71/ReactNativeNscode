import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Welcome } from 'app/main/Welcome';
import { LoginForm } from 'app/authentication/LoginForm';
import { AuthStackParamList } from 'routing/AuthStack.types';

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerTitleStyle: { alignSelf: 'center' } }}
            />
            <AuthStack.Screen name="LoginForm" component={LoginForm} options={{ title: 'Log In' }} />
        </AuthStack.Navigator>
    );
};
