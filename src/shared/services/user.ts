import { alertDanger, alertSuccess } from '../helpers/Functions';
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
    })
    .catch(() => {
      alertDanger('Esse email já existe!');
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

      alertSuccess('Nome alterado com sucesso!');
    })
    .catch((error) => {
      alertDanger('Aconteceu algum erro :(');
      console.log(error);
    });
  return response;
};
