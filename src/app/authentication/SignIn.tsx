import React from 'react';
import { Button, Text } from 'react-native-paper';

import { ScreenContainer } from 'ui/common';
import { SignInProps as Props } from 'app/authentication/SignIn.types';

export const SignIn = ({ navigation }: Props) => {
    return (
        <ScreenContainer>
            <Text>Sign In Screen</Text>
            <Button mode="contained" onPress={() => navigation.push('SignInForm')}>
                Sign In
            </Button>
        </ScreenContainer>
    );
};
