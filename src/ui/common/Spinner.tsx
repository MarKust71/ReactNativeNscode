import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native';

type Props = ActivityIndicatorProps;

export const Spinner = ({ size }: Props) => {
    return (
        <View>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};
