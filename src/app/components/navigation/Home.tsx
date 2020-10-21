import React, { useContext } from 'react';
import { Button, Text } from 'react-native';

import { ScreenContainer } from '../common';
import { AuthContext } from '../../context';

export const Home = () => {
    const { setUserToken } = useContext(AuthContext);

    return (
        <ScreenContainer>
            <Text>Welcome home!</Text>
            <Button title="Menu option #1" onPress={() => {}} />
            <Button title="Menu option #2" onPress={() => {}} />
            {/* <Button title="Drawer" onPress={() => navigation.toggleDrawer()} /> */}
            <Button title="Log Out" onPress={() => setUserToken('')} />
        </ScreenContainer>
    );
};
