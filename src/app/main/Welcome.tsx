import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text } from 'react-native-paper';

import { ScreenContainer } from '../../ui/common';

export type AuthStackParamList = {
    Welcome: undefined;
    LoginForm: undefined;
};
type WelcomeScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'LoginForm'>;
type Props = {
    navigation: WelcomeScreenNavigationProp;
    name?: string;
};

export const Welcome = ({ navigation }: Props) => {
    return (
        <ScreenContainer>
            <Text>Welcome Screen</Text>
            <Button mode="outlined" onPress={() => navigation.push('LoginForm')}>
                Log In
            </Button>
        </ScreenContainer>
    );
};
