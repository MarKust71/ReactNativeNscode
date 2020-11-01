import AsyncStorage from '@react-native-community/async-storage';

export const retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('toBeConsumed');
        console.log('retrieval works');
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
