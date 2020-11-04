import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key: string, value: number) => {
    console.log('store:', key, value);
    try {
        await AsyncStorage.setItem(key, String(value));
    } catch (error) {
        console.log(error);
    }
};
