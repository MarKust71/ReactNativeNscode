import { StackNavigationProp } from '@react-navigation/stack';

import { HomeStackParamList } from 'routing/HomeStack.types';

export type HomeNavigationProp = StackNavigationProp<HomeStackParamList, 'ShowToken'>;

export type HomeProps = {
    navigation: HomeNavigationProp;
    name?: string;
};
