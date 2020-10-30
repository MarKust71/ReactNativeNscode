import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { SignIn } from 'app/authentication/SignIn';
import { SignInForm } from 'app/authentication/SignInForm';
import { AuthStackParamList } from 'routing/AuthStack.types';

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerTitleStyle: { alignSelf: 'center' }, title: 'Welcome' }}
            />
            <AuthStack.Screen
                name="SignInForm"
                component={SignInForm}
                options={{ headerTitleStyle: { alignSelf: 'center' }, title: 'Sign In' }}
            />
        </AuthStack.Navigator>
    );
};
