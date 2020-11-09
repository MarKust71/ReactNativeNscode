import React from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { styles } from 'app/authentication/SignInForm.styles';
import { SignInFormProps as Props } from 'app/authentication/SignInForm.types';
import { Spinner } from 'ui/common';

export const SignInForm = (props: Props) => {
    const {
        loading,
        email,
        password,
        errorMessage,
        handlePress,
        handleChangeTextEmail,
        handleChangeTextPassword,
    } = props;

    const renderButton = (loading: boolean) => {
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
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                mode="outlined"
                label="E-mail"
                value={email}
                onChangeText={handleChangeTextEmail}
            />
            <TextInput
                style={styles.textInput}
                mode="outlined"
                label="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={handleChangeTextPassword}
            />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <View>{renderButton(loading)}</View>
        </View>
    );
};
