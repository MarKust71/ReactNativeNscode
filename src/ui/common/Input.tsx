import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from 'ui/common/Input.styles';
import { InputProps } from 'ui/common/Input.types';

export const Input = ({ label, value, onChangeText, secureTextEntry, placeholder }: InputProps) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={styles.inputStyle}
                autoCorrect={false}
            />
        </View>
    );
};
