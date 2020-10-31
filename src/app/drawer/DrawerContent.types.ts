import { DrawerNavigationProp } from '@react-navigation/drawer';

import { DrawerNavigationParamList } from 'routing/DrawerNavigation.types';

export type DrawerContentNavigationProp = DrawerNavigationProp<DrawerNavigationParamList>;

export type DrawerContentProps = {
    navigation: DrawerContentNavigationProp;
};
