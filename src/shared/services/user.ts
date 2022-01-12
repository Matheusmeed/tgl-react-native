// import { Notification } from '@components/index';
import api from './api';

export const createUser = async (email: string, name: string, pass: string) => {
  let response;
  await api
    .post('/user/create', {
      email: email.trim(),
      name: name.trim(),
      password: pass.trim(),
    })
    .then((res) => {
      response = res.data;
      //   Notification({
      //     message: 'Conta criada com sucesso!',
      //     type: 'success',
      //   });
    })
    .catch(() => {
      //   Notification({
      //     message: 'Esse email já existe!',
      //     type: 'danger',
      //   })
    });
  return response;
};

export const updateUser = async (email: string, name: string) => {
  let response;
  await api
    .put('/user/update', {
      email: email,
      name: name.trim().charAt(0).toUpperCase() + name.slice(1),
    })
    .then((res) => {
      response = res.data.name;

      //   Notification({
      //     message: 'Nome alterado com sucesso!',
      //     type: 'success',
      //     duration: 5000,
      //   });
    })
    .catch(() => {
      //   Notification({ message: 'Aconteceu algum erro :(', type: 'danger' })
    });
  return response;
};
