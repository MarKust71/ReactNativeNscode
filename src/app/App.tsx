import React, { useEffect } from 'react';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from './context';
import { Splash } from './components/common';
import { LoginForm } from './components/authentication/LoginForm';
import { AuthStackParamList, Welcome } from './components/navigation/Welcome';
import { Home } from './components/navigation/Home';

export const App = () => {
    // const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [userToken, setUserToken] = React.useState('');

    const authContext = React.useMemo(() => {
        return {
            signIn: () => {
                setIsLoading(false);
                setUserToken('asdf');
            },
            signUp: () => {
                setIsLoading(false);
                setUserToken('asdf');
            },
            signOut: () => {
                setIsLoading(false);
                setUserToken('');
            },
            setUserToken: (token: string) => {
                setUserToken(token);
            },
            userToken: '',
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
            firebase.auth().onAuthStateChanged((user) => {
                console.log('onAuthStateChanged fired...');
                if (user) {
                    setUserToken('asdf');
                } else {
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

    return (
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
    );
};
