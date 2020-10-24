import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

interface Props {
    children: ReactNode;
}

export const ScreenContainer = ({ children }: Props) => {
    return <View style={style.container}>{children}</View>;
};
