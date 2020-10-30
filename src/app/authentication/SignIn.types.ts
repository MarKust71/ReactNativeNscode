import { StackNavigationProp } from '@react-navigation/stack';

import { AuthStackParamList } from 'routing/AuthStack.types';

export type SignInScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SignInForm'>;

export type SignInProps = {
    navigation: SignInScreenNavigationProp;
    name?: string;
};
