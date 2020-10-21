import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

interface Props {
    label: string;
    value: string;
    onChangeText: (value: string) => void;
    secureTextEntry: boolean;
    placeholder: string;
}

export const Input = ({ label, value, onChangeText, secureTextEntry, placeholder }: Props) => {
    return (
        <View style={style.containerStyle}>
            <Text style={style.labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={style.inputStyle}
                autoCorrect={false}
            />
        </View>
    );
};
