import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = () => {
  let token = AsyncStorage.getItem('token');
  return token;
};
