import React, { useContext } from 'react';
import { Button, Text } from 'react-native-paper';

import { ScreenContainer } from 'ui/common';
import { AuthContext } from 'contexts/AuthContext';
import { HomeProps as Props } from 'app/home/ShowToken.types';

export const Home = ({ navigation }: Props) => {
    const context = useContext(AuthContext);

    return (
        <ScreenContainer>
            <Text>Welcome home!</Text>
            <Text>You are signed in as {context.value.contextUser}</Text>
            <Button
                onPress={() => {
                    navigation.push('ShowToken');
                }}
            >
                Show Token and User
            </Button>
            <Button
                onPress={() => {
                    navigation.navigate('Main');
                }}
            >
                Enter the main app screen
            </Button>
            {/* <CustomButton title="Drawer" onPress={() => navigation.toggleDrawer()} /> */}
            {/*<Button mode="contained" onPress={() => context.value.signOut()}>*/}
            {/*    Sign Out*/}
            {/*</Button>*/}
        </ScreenContainer>
    );
};
