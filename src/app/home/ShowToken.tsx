import React, { useState } from 'react';
import { Text } from 'react-native-paper';

import { ScreenContainer } from 'ui/common';
import { readAsyncStorageData } from 'app/asyncStorage/asyncStorageDataHandling';

export const ShowToken = () => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');

    readAsyncStorageData('token').then((result) => {
        if (result) {
            // console.log('token odczytany z localstorage:', result);
            setToken(result);
        } else {
            console.log('nie ma tokena z localstorage');
        }
    });

    readAsyncStorageData('user').then((result) => {
        if (result) {
            // console.log('user odczytany z localstorage:', result);
            setUser(result);
        } else {
            console.log('nie ma usera z localstorage');
        }
    });

    return (
        <ScreenContainer>
            <Text>Show Token</Text>
            <Text>{token}</Text>
            <Text>Show User</Text>
            <Text>{user}</Text>
        </ScreenContainer>
    );
};
