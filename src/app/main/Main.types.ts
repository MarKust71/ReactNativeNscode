import { DrawerNavigationProp } from '@react-navigation/drawer';

import { MainStackParamList } from 'routing/MainStack.types';

type MainScreenNavigationProp = DrawerNavigationProp<MainStackParamList, 'Drawer'>;

export type MainStackProps = {
    navigation: MainScreenNavigationProp;
};
