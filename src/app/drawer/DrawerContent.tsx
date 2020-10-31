import React from 'react';
import { Drawer } from 'react-native-paper';
import { View } from 'react-native';

import { DrawerContentProps as Props } from 'app/drawer/DrawerContent.types';

export const DrawerContent = ({ navigation }: Props) => {
    // const [active, setActive] = useState('');
    // const { value } = useContext(AuthContext);
    // console.log('drawercontent.navigation:', navigation);

    return (
        <View>
            <Drawer.Section>
                <Drawer.Item
                    label="Home"
                    onPress={() => {
                        navigation.closeDrawer();
                        navigation.navigate('Home');
                    }}
                />
                <Drawer.Item
                    label="Main"
                    onPress={() => {
                        navigation.closeDrawer();
                        navigation.navigate('Main');
                    }}
                />
                {/*<Drawer.Item label="Sign Out" onPress={() => value.signOut()} />*/}
            </Drawer.Section>
        </View>
    );
};
