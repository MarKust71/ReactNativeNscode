import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    },
});

export const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Finally works!</Text>
        </View>
    );
};
