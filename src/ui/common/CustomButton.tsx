import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { CustomButtonProps } from 'ui/common/CustomButton.types';

import { styles } from './CustomButton.styles';

export const CustomButton = ({ onPress, children }: CustomButtonProps) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};
