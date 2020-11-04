import { StackNavigationProp } from '@react-navigation/stack';

import { AuthStackParamList } from 'routing/AuthStack.types';

type SignInScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SignIn'>;

export type SignInProps = {
    navigation: SignInScreenNavigationProp;
    name?: string;
};
