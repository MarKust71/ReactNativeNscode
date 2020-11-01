import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from 'app/main/CBButton.styles';
import { CBButtonType } from 'app/main/CBButton.types';

export const CBButton = ({ colors, onPress, text }: CBButtonType) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient colors={colors} start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} style={styles.gradStyle}>
                <Text style={styles.buttonTextStyle}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};
