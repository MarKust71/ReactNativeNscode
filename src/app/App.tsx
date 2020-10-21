import React, { useContext, useEffect } from 'react';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from './context';
import { LogIn } from './components/navigation/LogIn';

export const App = () => {
    // const [loggedIn, setLoggedIn] = useState(false);
    // const authContext = useMemo(() => {
    //     logIn: () => console.log('logIn from context');
    // }, []);
    const authContext = useContext(AuthContext);
    console.log('authContext:', authContext);

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
                    // setLoggedIn(true);
                } else {
                    // setLoggedIn(false);
                }
            });
            console.log(`Firebase App ${firebaseApp.name} created`);
        } else {
            console.log('Firebase App probably created before...', firebase.apps);
        }
    }, []);

    const AuthStack = createStackNavigator();

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <AuthStack.Navigator>
                    <AuthStack.Screen name="Log In" component={LogIn} />
                </AuthStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
};
