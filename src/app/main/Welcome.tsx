import React from 'react';
import { Button, Text } from 'react-native-paper';

import { ScreenContainer } from 'ui/common';
import { Props } from 'app/main/Welcome.types';

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
