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
      response = res.data;
      localStorage.setItem('token', res.data.token.token);
    })
    .catch(() => {
      // Notification({
      //   message: 'Conta inválida...',
      //   type: 'danger',
      // });
    });
  return response;
};

export const changePass = async (email: string) => {
  let response;
  await api
    .post('/reset', { email: email.trim() })
    .then((res) => {
      response = res.data.token;
    })
    .catch(() => {
      // Notification({
      //   type: 'danger',
      //   message: 'Esse email não existe',
      //   title: 'ERRO',
      // });
    });
  return response;
};

export const resetPass = async (token: string, pass: string) => {
  let response;
  await api
    .post(`/reset/${token}`, { password: pass.trim() })
    .then(() => {
      response = true;
      // Notification({
      //   message: 'Senha atualizada com sucesso!',
      //   type: 'success',
      // });
    })
    .catch(() => {
      // Notification({
      //   title: 'ERRO',
      //   message: 'Aconteceu algum erro :(',
      //   type: 'danger',
      // })
    });
  return response;
};
