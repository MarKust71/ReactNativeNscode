import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase';

import { LoginForm } from './src/app/authentication/LoginForm';
import { CustomButton, CardContainer, CardSection, Header } from './src/ui/common';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

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
                    setLoggedIn(true);
                } else {
                    setLoggedIn(false);
                }
            });
            console.log(`Firebase App ${firebaseApp.name} created`);
        } else {
            console.log('Firebase App probably created before...', firebase.apps);
        }
    }, []);

    const renderContent = () => {
        if (loggedIn) {
            return (
                <CardContainer>
                    <CardSection>
                        <CustomButton onPress={() => firebase.auth().signOut()}>Log Out</CustomButton>
                    </CardSection>
                </CardContainer>
            );
        }
        return <LoginForm />;
    };

    return (
        <View style={styles.container}>
            <Header headerText="Authentication" />
            {renderContent()}
        </View>
    );
};
