import React, { useContext } from 'react';
import { Button, Text } from 'react-native-paper';

import { ScreenContainer } from 'ui/common';
import { AuthContext } from 'contexts/AuthContext';
import { readAsyncStorageData } from '../asyncStorage/asyncStorageDataHandling';

export const Home = () => {
    const { signOut } = useContext(AuthContext);

    readAsyncStorageData('token').then((result) => {
        if (result) {
            console.log('token odczytany z localstorage:', result);
        } else {
            console.log('nie ma tokena z localstorage');
        }
    });

    return (
        <ScreenContainer>
            <Text>Welcome home!</Text>
            <Button onPress={() => {}}>Menu option #1</Button>
            <Button onPress={() => {}}>Menu option #2</Button>
            {/* <CustomButton title="Drawer" onPress={() => navigation.toggleDrawer()} /> */}
            {/*<Button onPress={() => setUserToken('')}>Log Out</Button>*/}
            <Button onPress={() => signOut()}>Log Out</Button>
        </ScreenContainer>
    );
};
