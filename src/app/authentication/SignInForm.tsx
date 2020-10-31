import React, { useState } from 'react';
import firebase from 'firebase';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { Spinner } from 'ui/common';

import { styles } from './SignInForm.styles';
// import { SignInFormProps as Props } from './SignInForm.types';

export const SignInForm = () => {
    const [email, setEmail] = useState('test@test.pl');
    const [password, setPassword] = useState('testtest');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const onLoginSuccess = () => {
        setLoading(false);
        setEmail('');
        setPassword('');
    };

    const onLoginFail = (reason: any) => {
        setLoading(false);
        setErrorMessage('Authentication Failed!');
        console.log('Reason:', reason.message);
    };

    const handlePress = () => {
        setLoading(true);
        setErrorMessage('');
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                onLoginSuccess();
            })
            .catch((reason) => {
                onLoginFail(reason);
            });
    };

    const renderButton = () => {
        if (loading) {
            return <Spinner size={'small'} />;
        }
        return (
            <Button mode="contained" onPress={handlePress} style={styles.button}>
                Sign In
            </Button>
        );
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput
                style={styles.textInput}
                mode="outlined"
                label="E-mail"
                value={email}
                onChangeText={(value) => {
                    setErrorMessage('');
                    setEmail(value);
                }}
            />
            <TextInput
                style={styles.textInput}
                mode="outlined"
                label="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={(value) => {
                    setErrorMessage('');
                    setPassword(value);
                }}
            />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <View>{renderButton()}</View>
        </View>
    );
};
