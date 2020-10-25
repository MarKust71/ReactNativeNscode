import React from 'react';
import { ActivityIndicatorProps, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

type Props = ActivityIndicatorProps;

export const Spinner = ({ size }: Props) => {
    return (
        <View>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};
