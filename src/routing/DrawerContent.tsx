import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';

export const DrawerContent = () => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView>
                <View>
                    <Text>Main Content</Text>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};
