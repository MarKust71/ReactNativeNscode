import React, { useEffect, useMemo, useState } from 'react';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { readAsyncStorageData, storeAsyncStorageData } from 'app/asyncStorage/asyncStorageDataHandling';
import { Splash } from 'ui/common';
import { AuthContext } from 'contexts/AuthContext';
import { AuthStackNavigator } from 'routing/AuthStackNavigator';
import { DrawerNavigator } from 'routing/DrawerNavigator';

export const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    // const [userToken, setUserToken] = useState('');
    // const [user, setUser] = useState('');

    const [value, setValue] = useState({
        signIn: () => {
            setIsLoading(false);
        },
        signOut: () => {
            setIsLoading(false);
            firebase.auth().signOut();
        },
        contextUserToken: '',
        // contextUserToken: userToken,
        // setContextUserToken: (token: string) => {
        //     authContext.contextUserToken = token;
        // },
        contextUser: '',
        // contextUser: user,
        // setContextUser: (user: string) => {
        //     authContext.contextUser = user;
        // },
    });

    /*
    const authContext = useMemo(() => {
        return {
            signIn: () => {
                setIsLoading(false);
            },
            signOut: () => {
                setIsLoading(false);
                firebase.auth().signOut();
            },
            contextUserToken: userToken,
            setContextUserToken: (token: string) => {
                authContext.contextUserToken = token;
            },
            contextUser: user,
            setContextUser: (user: string) => {
                authContext.contextUser = user;
            },
        };
    }, []);
*/

    const authContext = useMemo(() => ({ value, setValue }), [value, setValue]);
    console.log('authcontext', authContext);

    useEffect(() => {
        readAsyncStorageData('token')
            .then((result) => {
                // setUserToken(result || '');
                // authContext.setContextUserToken(result || '');
                setValue({ ...value, contextUserToken: result || '' });
            })
            .catch((error) => console.log('Coś nie tak z pobraniem tokena ze storage:', error.message));
        readAsyncStorageData('user')
            .then((result) => {
                // authContext.setContextUser(result || '');
                setValue({ ...value, contextUser: result || '' });
            })
            .catch((error) => console.log('Coś nie tak z pobraniem usera ze storage:', error.message));
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
            // firebase.auth().signOut();
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    user.getIdToken()
                        .then((result) => {
                            storeAsyncStorageData({ key: 'token', value: result });
                            storeAsyncStorageData({ key: 'user', value: user.email || '' });
                            // authContext.setContextUserToken(result);
                            // authContext.setContextUser(user.email || '');
                            // setUserToken(result);
                        })
                        .catch((error) => {
                            // authContext.setContextUserToken('');
                            // authContext.setContextUser('');
                            // setUserToken('');
                            console.log('Coś nie tak z tokenem:', error.message);
                        });
                } else {
                    // authContext.setContextUserToken('');
                    // authContext.setContextUser('');
                    // setUserToken('');
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
                <NavigationContainer>
                    {value.contextUserToken ? <DrawerNavigator /> : <AuthStackNavigator />}
                </NavigationContainer>
            </AuthContext.Provider>
        </PaperProvider>
    );
};
