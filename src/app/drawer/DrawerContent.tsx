import React, { useContext, useState } from 'react';
import { Drawer } from 'react-native-paper';
import { View } from 'react-native';

import { DrawerContentProps as Props } from 'app/drawer/DrawerContent.types';
import { AuthContext } from 'contexts/AuthContext';

export const DrawerContent = ({ navigation }: Props) => {
    const [active, setActive] = useState('');
    const { value } = useContext(AuthContext);

    return (
        <View>
            <Drawer.Section>
                <Drawer.Item
                    label="Home"
                    active={active === 'home'}
                    onPress={() => {
                        setActive('home');
                        navigation.closeDrawer();
                        navigation.navigate('Home');
                    }}
                />
                <Drawer.Item
                    label="Main"
                    active={active === 'main'}
                    onPress={() => {
                        setActive('main');
                        navigation.closeDrawer();
                        navigation.navigate('Main');
                    }}
                />
                <Drawer.Item label="Sign Out" onPress={() => value.signOut()} />
            </Drawer.Section>
        </View>
    );
};
