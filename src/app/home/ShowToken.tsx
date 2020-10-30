import React, { useState } from 'react';
import { Text } from 'react-native-paper';

import { ScreenContainer } from 'ui/common';
import { readAsyncStorageData } from 'app/asyncStorage/asyncStorageDataHandling';

export const ShowToken = () => {
    const [token, setToken] = useState('');
    readAsyncStorageData('token').then((result) => {
        if (result) {
            console.log('token odczytany z localstorage:', result);
            setToken(result);
        } else {
            console.log('nie ma tokena z localstorage');
        }
    });

    return (
        <ScreenContainer>
            <Text>Show Token</Text>
            <Text>{token}</Text>
        </ScreenContainer>
    );
};
