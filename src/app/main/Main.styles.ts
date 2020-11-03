import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerStyle: {
        flex: 1 / 2,
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
    buttonGroup: {
        flex: 1 / 5,
        justifyContent: 'space-around',
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 5,
    },
    resultsContainer: {
        flex: 1 / 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultsConsumed: {
        fontSize: 100,
        fontWeight: '600',
    },
    resultsToBeConsumed: {
        fontSize: 50,
        fontWeight: '400',
    },
    resultsQuestion: {
        fontSize: 20,
        color: 'black',
        opacity: 0.3,
    },
});
