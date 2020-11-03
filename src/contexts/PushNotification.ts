import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

type Token = {
    os: string;
    token: string;
};

export const initializePushNotification = () => {
    PushNotification.configure({
        onRegister: (token: Token) => {
            console.log('TOKEN:', token);
        },

        onNotification: (notification) => {
            console.log('NOTIFICATION:', notification);
        },

        /*
        onAction: (notification) => {
            console.log('ACTION:', notification.action);
            console.log('NOTIFICATION:', notification);
        },
    */

        /*
        onRegistrationError: (err) => {
            console.error(err.message, err);
        },
    */

        permissions: {
            alert: true,
            badge: true,
            sound: true,
        },

        popInitialNotification: true,

        // requestPermissions: true,
        requestPermissions: Platform.OS === 'ios',
    });
};
