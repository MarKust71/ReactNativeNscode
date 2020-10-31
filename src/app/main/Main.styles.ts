import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
    },
    notificationViewStyle: {
        flex: 1 / 6,
    },
    notificationEnableTextStyle: {
        color: '#0052D4',
        alignSelf: 'center',
        fontWeight: '800',
        marginBottom: 30,
    },
    notificationDisableTextStyle: {
        color: 'gray',
        alignSelf: 'center',
        fontWeight: '800',
        marginBottom: 30,
    },
});
