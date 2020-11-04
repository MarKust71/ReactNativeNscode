import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { Main } from 'app/main/Main';
import { styles } from 'routing/MainStack.styles';
import { MainStackParamList } from 'routing/MainStack.types';
import { MainStackProps as Props } from 'app/main/Main.types';

const MainStack = createStackNavigator<MainStackParamList>();

export const MainStackNavigator = ({ navigation }: Props) => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="Main"
                component={Main}
                options={{
                    headerTitleStyle: { alignSelf: 'center' },
                    headerLeft: () => (
                        <TouchableOpacity style={styles.icon}>
                            <Icon name="md-menu" type="ionicon" onPress={() => navigation.toggleDrawer()} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => <></>,
                }}
            />
        </MainStack.Navigator>
    );
};
