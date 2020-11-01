import { GestureResponderEvent } from 'react-native';

export type CBButtonType = {
    onPress?: (event: GestureResponderEvent | undefined) => void;
    colors: string[];
    text: string;
};
