import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

export const initializePushNotification = () => {
    PushNotification.configure({
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
