import AsyncStorage from '@react-native-community/async-storage';

export type AsyncStorageItem = {
    key: string;
    value: string;
};

export const storeAsyncStorageData = async (item: AsyncStorageItem) => {
    const { key, value } = item;
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        // handle error
    }
};

export const readAsyncStorageData = async (key: string) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        // handle errpr
    }
    return '';
};
