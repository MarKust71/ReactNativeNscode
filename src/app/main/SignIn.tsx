import React from 'react';
import { Button, Text } from 'react-native-paper';

import { ScreenContainer } from 'ui/common';
import { Props } from 'app/main/SignIn.types';

export const SignIn = ({ navigation }: Props) => {
    return (
        <ScreenContainer>
            <Text>Sign In Screen</Text>
            <Button mode="outlined" onPress={() => navigation.push('LoginForm')}>
                Sign In
            </Button>
        </ScreenContainer>
    );
};
