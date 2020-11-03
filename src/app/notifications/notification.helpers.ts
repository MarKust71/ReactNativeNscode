import PushNotification, { PushNotificationScheduleObject } from 'react-native-push-notification';

export const MY_NOTIFICATION_CHANNEL = 'my-notification-channel';

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

export const cancelNotifications = () => {
    PushNotification.cancelAllLocalNotifications();
    notify('all notifications cancelled');
    // console.log('notifications cancelled');
};

export const setNotification = () => {
    const date = new Date(Date.now() + 1000 * 60);
    // const date = new Date(Date.now() + 1000 * 60 * 60 * 2),
    const details: PushNotificationScheduleObject = {
        ...notificationDetails,
        message: "probably you haven't noticed you haven't drunk anything for the last two hours!",
        date,
        autoCancel: false,
    };

    PushNotification.localNotificationSchedule(details);

    notify("You're gonna be notified to drink something within the next 2 hours");
    notify(`new reminder set on ${date.toString()}`);
    // console.log('notification set/renewed');
};
