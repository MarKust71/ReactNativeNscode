import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    },
});

interface Props {
    children: ReactNode;
}

export const CardSection = (props: Props) => {
    return <View style={styles.containerStyle}>{props.children}</View>;
};
