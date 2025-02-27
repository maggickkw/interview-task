import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORE_KEYS = {
  TOKEN: 'TOKEN',

};

export const saveToCache = async (_key: string, _value: any) => {
    try {
      const jsonValue = JSON.stringify(_value);
      await AsyncStorage.setItem(_key, jsonValue);
    } catch (error) {
      // Error saving data
    }
  };
  
  export const getCachedData = async (_key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(_key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  
  export const clearCachedData = async (_key: string) => {
    try {
      await AsyncStorage.removeItem(_key);
    } catch (e) {
      // error reading value
    }
  };
  





export const resetCache = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // remove error
  }
};
