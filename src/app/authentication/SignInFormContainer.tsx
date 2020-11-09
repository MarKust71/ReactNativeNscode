import React, { useState } from 'react';
import firebase from 'firebase';

import { createNotificationChannel } from 'app/notifications/notification.helpers';
import { MY_NOTIFICATION_CHANNEL } from 'app/config/globals';
import { SignInForm } from 'app/authentication/SignInForm';
import { initializePushNotification } from 'helpers/PushNotification';

import { SignInFormProps as Props } from './SignInForm.types';

export const SignInFormContainer = () => {
    const [email, setEmail] = useState('test@test.pl');
    const [password, setPassword] = useState('testtest');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const onLoginSuccess = () => {
        setLoading(false);
        setEmail('');
        setPassword('');
        initializePushNotification();
        createNotificationChannel(MY_NOTIFICATION_CHANNEL);
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

    const handleChangeTextEmail = (value: string) => {
        setErrorMessage('');
        setEmail(value);
    };

    const handleChangeTextPassword = (value: string) => {
        setErrorMessage('');
        setPassword(value);
    };

    const props: Props = {
        loading,
        email,
        password,
        errorMessage,
        handlePress,
        handleChangeTextEmail,
        handleChangeTextPassword,
    };

    return <SignInForm {...props} />;
};
