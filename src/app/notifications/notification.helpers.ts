import PushNotification, { PushNotificationScheduleObject } from 'react-native-push-notification';

import { MY_NOTIFICATION_CHANNEL, MY_NOTIFICATION_DELAY } from 'app/config/globals';

const notificationDetails = {
    channelId: MY_NOTIFICATION_CHANNEL,
    title: '',
};

const channelExistsCallback = (exists: boolean) => {
    console.log(`channel '${MY_NOTIFICATION_CHANNEL}' already exists: ${exists}`);
    if (!exists) {
        PushNotification.createChannel(
            {
                channelId: MY_NOTIFICATION_CHANNEL,
                channelName: 'My channel',
            },
            (created) => console.log(`channel ${MY_NOTIFICATION_CHANNEL} created: ${created}`),
        );
    }
};

export const createNotificationChannel = (channel: string) => {
    PushNotification.channelExists(channel, channelExistsCallback);
};

export const notify = (message: string) => {
    PushNotification.localNotification({
        ...notificationDetails,
        message,
    });
};

export const cancelNotifications = (message?: string) => {
    PushNotification.cancelAllLocalNotifications();
    if (message) {
        notify(message);
    }
    // console.log('notifications cancelled');
};

export const setNotification = () => {
    const date = new Date(Date.now() + MY_NOTIFICATION_DELAY);
    const details: PushNotificationScheduleObject = {
        ...notificationDetails,
        message: 'It is time for drink!',
        date,
        autoCancel: false,
    };

    PushNotification.localNotificationSchedule(details);
};
