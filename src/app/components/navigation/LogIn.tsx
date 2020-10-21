import React from 'react';
import { Button, Text } from 'react-native';

import { ScreenContainer } from '../common';
import { AuthContext } from '../../context';

export const LogIn = () => {
    const { logIn } = React.useContext(AuthContext);
    return (
        <ScreenContainer>
            <Text>Welcome Screen</Text>
            <Button
                title="Log In"
                onPress={() => {
                    if (logIn) {
                        console.log('Log In button pressed');
                        logIn();
                    } else {
                        console.log('Something wrong with logIn()');
                    }
                }}
            />
        </ScreenContainer>
    );
};
