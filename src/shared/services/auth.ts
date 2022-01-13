import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';
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
    .then((res) => {
      AsyncStorage.setItem('@token', res.data.token.token);

      showMessage({
        icon: 'success',
        message: 'Login realizado',
        type: 'success',
        duration: 1400,
      });

      response = res.data;
    })
    .catch(() => {
      showMessage({
        icon: 'danger',
        message: 'Essa conta não existe...',
        type: 'danger',
        duration: 3000,
      });
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

      showMessage({
        icon: 'success',
        message: 'Email válido',
        type: 'success',
        duration: 1000,
      });
    })
    .catch(() => {
      showMessage({
        icon: 'danger',
        message: 'Erro',
        description: 'Esse email não existe...',
        type: 'danger',
        duration: 3000,
      });
    });
  return response;
};

export const resetPass = async (token: string, pass: string) => {
  let response;
  await api
    .post(`/reset/${token}`, { password: pass.trim() })
    .then(() => {
      response = true;
      showMessage({
        icon: 'success',
        message: 'Senha atualizada com sucesso!',
        description: 'Agora faça o seu login',
        type: 'success',
        duration: 3000,
      });
    })
    .catch(() => {
      showMessage({
        icon: 'danger',
        message: 'Aconteceu algum erro :(',
        type: 'danger',
        duration: 3000,
      });
    });
  return response;
};
