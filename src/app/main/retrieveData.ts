import AsyncStorage from '@react-native-community/async-storage';

export const retrieveData = async (key: string) => {
    console.log('retrieve:', key);
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return Number(value);
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};
