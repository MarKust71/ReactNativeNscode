import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './Header.styles';
import { HeaderProps } from './Header.types';

export const Header = (props: HeaderProps) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
