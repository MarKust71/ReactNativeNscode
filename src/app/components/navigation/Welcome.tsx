import React from 'react';
import { Button, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenContainer } from '../common';
// import { AuthContext } from '../../context';

export type AuthStackParamList = {
    Welcome: undefined;
    LoginForm: undefined;
};
type WelcomeScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'LoginForm'>;
type Props = {
    navigation: WelcomeScreenNavigationProp;
};

export const Welcome = ({ navigation }: Props) => {
    // const { logIn } = React.useContext(AuthContext);
    return (
        <ScreenContainer>
            <Text>Welcome Screen</Text>
            <Button title="Log In" onPress={() => navigation.push('LoginForm')} />
        </ScreenContainer>
    );
};
