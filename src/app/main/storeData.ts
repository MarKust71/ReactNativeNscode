import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (value: number) => {
    try {
        await AsyncStorage.setItem('toBeConsumed', String(value));
    } catch (error) {
        console.log(error);
    }
};
