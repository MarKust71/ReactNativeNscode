import React, { useEffect, useMemo, useState } from 'react';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { storeAsyncStorageData } from 'app/asyncStorage/asyncStorageDataHandling';
import { Splash } from 'ui/common';
import { AuthContext } from 'contexts/AuthContext';
import { TabsNavigator } from 'routing/TabsNavigator';
import { AuthStackNavigator } from 'routing/AuthStackNavigator';

export const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState('');

    const authContext = useMemo(() => {
        return {
            signIn: () => {
                setIsLoading(false);
            },
            signOut: () => {
                setIsLoading(false);
                firebase.auth().signOut();
            },
            contextUserToken: '',
            setContextUserToken: (token: string) => {
                authContext.contextUserToken = token;
            },
        };
    }, []);

    useEffect(() => {
        if (!firebase.apps.length) {
            // const firebaseApp = firebase.initializeApp({
            firebase.initializeApp({
                apiKey: 'AIzaSyAfPA7ZHxWQuNtJYX28lWwPAAe6jP_Xawc',
                authDomain: 'nscode-568a7.firebaseapp.com',
                databaseURL: 'https://nscode-568a7.firebaseio.com',
                projectId: 'nscode-568a7',
                storageBucket: 'nscode-568a7.appspot.com',
                messagingSenderId: '897166631277',
                appId: '1:897166631277:web:f252480d297316266bba64',
            });
            firebase.auth().signOut();
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    user.getIdToken()
                        .then((result) => {
                            storeAsyncStorageData({ key: 'token', value: result });
                            authContext.setContextUserToken(result);
                            setUserToken(result);
                        })
                        .catch((error) => console.log('Coś nie tak z tokenem', error.message));
                } else {
                    authContext.setContextUserToken('');
                    setUserToken('');
                }
            });
            // console.log(`Firebase App ${firebaseApp.name} created`);
            // } else {
            //     console.log('Firebase App probably created before...', firebase.apps);
        }
    }, []);

    if (isLoading) {
        return <Splash />;
    }

    return (
        <PaperProvider>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer>{userToken ? <TabsNavigator /> : <AuthStackNavigator />}</NavigationContainer>
            </AuthContext.Provider>
        </PaperProvider>
    );
};
