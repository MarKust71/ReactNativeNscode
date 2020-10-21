import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import { LoginForm } from './components/authentication/LoginForm';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export const App = () => {
    useEffect(() => {
        firebase.initializeApp({
            apiKey: 'AIzaSyAfPA7ZHxWQuNtJYX28lWwPAAe6jP_Xawc',
            authDomain: 'nscode-568a7.firebaseapp.com',
            databaseURL: 'https://nscode-568a7.firebaseio.com',
            projectId: 'nscode-568a7',
            storageBucket: 'nscode-568a7.appspot.com',
            messagingSenderId: '897166631277',
            appId: '1:897166631277:web:f252480d297316266bba64',
        });
    }, []);
    return (
        <View style={styles.container}>
            <Header headerText="Authentication" />
            <LoginForm />
        </View>
    );
};
