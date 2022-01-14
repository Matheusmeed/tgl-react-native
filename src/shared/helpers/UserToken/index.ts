import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  let token = await AsyncStorage.getItem('token');
  return token;
};
