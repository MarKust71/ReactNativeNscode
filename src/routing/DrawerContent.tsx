import React from 'react';
import { Drawer } from 'react-native-paper';

export const DrawerContent = ({ navigation }) => {
    // const [active, setActive] = useState('');
    // const { signOut } = useContext(AuthContext);

    return (
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
            {/*<Drawer.Item label="Sign Out" onPress={() => signOut()} />*/}
        </Drawer.Section>
    );
};
