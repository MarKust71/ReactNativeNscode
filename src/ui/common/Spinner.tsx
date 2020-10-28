import React from 'react';
import { ActivityIndicatorProps, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export const Spinner = ({ size }: ActivityIndicatorProps) => {
    return (
        <View>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};
