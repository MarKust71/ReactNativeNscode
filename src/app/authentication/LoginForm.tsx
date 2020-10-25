import React, { useState } from 'react';
import firebase from 'firebase';
import { Text, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { Spinner } from '../../ui/common';

const style = StyleSheet.create({
    errorMessage: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
    },
    button: {
        marginLeft: 5,
        marginRight: 5,
    },
});

type Props = {
    name?: string;
};

export const LoginForm = ({ name }: Props) => {
    console.log(name);

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
            <Button mode="outlined" onPress={handlePress} style={style.button}>
                Log In
            </Button>
        );
    };

    return (
        <>
            <TextInput
                style={style.textInput}
                mode="outlined"
                label="E-mail"
                value={email}
                onChangeText={(value) => {
                    setErrorMessage('');
                    setEmail(value);
                }}
            />
            <TextInput
                style={style.textInput}
                mode="outlined"
                label="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={(value) => {
                    setErrorMessage('');
                    setPassword(value);
                }}
            />
            <Text style={style.errorMessage}>{errorMessage}</Text>
            <View>{renderButton()}</View>
        </>
    );
};
