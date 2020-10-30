import React, { useContext } from 'react';
import { Button, Text } from 'react-native-paper';

import { ScreenContainer } from 'ui/common';
import { AuthContext } from 'contexts/AuthContext';
import { HomeProps as Props } from 'app/home/ShowToken.types';

export const Home = ({ navigation }: Props) => {
    const { signOut } = useContext(AuthContext);

    return (
        <ScreenContainer>
            <Text>Welcome home!</Text>
            <Button
                onPress={() => {
                    navigation.push('ShowToken');
                }}
            >
                Show Token
            </Button>
            <Button onPress={() => {}}>Menu option #2</Button>
            {/* <CustomButton title="Drawer" onPress={() => navigation.toggleDrawer()} /> */}
            <Button mode="contained" onPress={() => signOut()}>
                Sign Out
            </Button>
        </ScreenContainer>
    );
};
