import React, { useEffect, useMemo, useState } from 'react';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

import { storeAsyncStorageData } from './src/app/asyncStorage/asyncStorageDataHandling';
import { Home } from './src/app/main/Home';
import { AuthStackParamList, Welcome } from './src/app/main/Welcome';
import { Splash } from './src/ui/common';
import { AuthContext } from './src/app/context';
import { LoginForm } from './src/app/authentication/LoginForm';

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
            const firebaseApp = firebase.initializeApp({
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
                console.log('onAuthStateChanged fired');
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
            console.log(`Firebase App ${firebaseApp.name} created`);
            // } else {
            //     console.log('Firebase App probably created before...', firebase.apps);
        }
    }, []);

    const AuthStack = createStackNavigator<AuthStackParamList>();
    const Tabs = createBottomTabNavigator();

    if (isLoading) {
        return <Splash />;
    }

    // console.log('userToken:', userToken);

    return (
        <PaperProvider>
            <AuthContext.Provider value={authContext}>
                {userToken ? (
                    <NavigationContainer>
                        <Tabs.Navigator>
                            <Tabs.Screen name="Home" component={Home} />
                        </Tabs.Navigator>
                    </NavigationContainer>
                ) : (
                    <NavigationContainer>
                        <AuthStack.Navigator>
                            <AuthStack.Screen
                                name="Welcome"
                                component={Welcome}
                                options={{ headerTitleStyle: { alignSelf: 'center' } }}
                            />
                            <AuthStack.Screen name="LoginForm" component={LoginForm} options={{ title: 'Log In' }} />
                        </AuthStack.Navigator>
                    </NavigationContainer>
                )}
            </AuthContext.Provider>
        </PaperProvider>
    );
};
