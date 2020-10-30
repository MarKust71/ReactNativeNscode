import { StackNavigationProp } from '@react-navigation/stack';

import { AuthStackParamList } from 'routing/AuthStack.types';

export type WelcomeScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'LoginForm'>;

export type Props = {
    navigation: WelcomeScreenNavigationProp;
    name?: string;
};
