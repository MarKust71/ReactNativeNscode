import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { SignIn } from 'app/main/SignIn';
import { SignInForm } from 'app/authentication/SignInForm';
import { AuthStackParamList } from 'routing/AuthStack.types';

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Welcome"
                component={SignIn}
                options={{ headerTitleStyle: { alignSelf: 'center' } }}
            />
            <AuthStack.Screen name="LoginForm" component={SignInForm} options={{ title: 'Log In' }} />
        </AuthStack.Navigator>
    );
};
