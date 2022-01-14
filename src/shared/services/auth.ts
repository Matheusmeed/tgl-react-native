import AsyncStorage from '@react-native-async-storage/async-storage';
import { alertDanger, alertSuccess } from '../helpers/Functions';
import api from './api';

interface ILogin {
  email: string;
  password: string;
}

export const login = async (content: ILogin) => {
  let response;

  await api
    .post('/login', {
      email: content.email.trim(),
      password: content.password.trim(),
    })
    .then(async (res) => {
      await AsyncStorage.setItem('token', res.data.token.token);
      alertSuccess('Login realizado');

      response = res.data;
    })
    .catch(() => {
      alertDanger('Essa conta não existe...');

      response = false;
    });
  return response;
};

export const changePass = async (email: string) => {
  let response;
  await api
    .post('/reset', { email: email.trim() })
    .then((res) => {
      response = res.data.token;
      alertSuccess('Email válido');
    })
    .catch(() => {
      alertDanger('Esse email não existe...');
    });
  return response;
};

export const resetPass = async (token: string, pass: string) => {
  let response;
  await api
    .post(`/reset/${token}`, { password: pass.trim() })
    .then(() => {
      response = true;
      alertSuccess('Senha atualizada com sucesso!');
    })
    .catch(() => {
      alertDanger('Aconteceu algum erro :(');
    });
  return response;
};
