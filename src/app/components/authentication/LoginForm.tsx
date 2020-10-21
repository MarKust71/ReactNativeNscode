import React, { useContext, useState } from 'react';
import firebase from 'firebase';
import { Text, StyleSheet } from 'react-native';

import { Button, Card, CardSection, Input, Spinner } from '../common';
import { AuthContext } from '../../context';

const style = StyleSheet.create({
    errorMessage: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
});

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const { setUserToken } = useContext(AuthContext);

    const onLoginSuccess = (result: void | firebase.auth.UserCredential) => {
        setLoading(false);
        setEmail('');
        setPassword('');
        setUserToken('asdf');
        console.log('Result:', result);
    };

    const onLoginFail = (reason: any) => {
        setLoading(false);
        setErrorMessage('Authentication Failed!');
        console.log('Reason:', reason.message);
    };

    const handlePress = () => {
        setLoading(true);
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                onLoginSuccess(result);
            })
            .catch((reason) => {
                onLoginFail(reason);
            });
    };

    const renderButton = () => {
        if (loading) {
            return <Spinner size={'small'} />;
        }
        return <Button onPress={handlePress}>Log In</Button>;
    };

    return (
        <Card>
            <CardSection>
                <Input
                    placeholder="email address"
                    secureTextEntry={false}
                    label="E-mail:"
                    value={email}
                    onChangeText={(value) => {
                        setErrorMessage('');
                        setEmail(value);
                    }}
                />
            </CardSection>
            <CardSection>
                <Input
                    placeholder="password"
                    secureTextEntry={true}
                    label="Password:"
                    value={password}
                    onChangeText={(value) => {
                        setErrorMessage('');
                        setPassword(value);
                    }}
                />
            </CardSection>
            <Text style={style.errorMessage}>{errorMessage}</Text>
            <CardSection>{renderButton()}</CardSection>
        </Card>
    );
};
