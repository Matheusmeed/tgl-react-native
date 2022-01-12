// import { Notification } from '@components/index';
import api from './api';

export const listBet = async (games: string[]) => {
  let response;

  let gamesArr = games.map((game) => {
    if (games.length - 1 === games.indexOf(game)) {
      return 'type%5B%5D=' + game;
    } else {
      return 'type%5B%5D=' + game + '&';
    }
  });

  await api
    .get(`/bet/all-bets?${gamesArr.join('')}` || `/bet/all-bets`, {})
    .then((res) => (response = res.data.reverse()))
    .catch(() => {
      //   Notification({ message: 'Ocorreu algum erro!', type: 'danger' })
    });
  return response;
};

export const newBet = async (
  games: [{ id: number; numbers: number[] }],
  minValue: number
) => {
  let response;
  await api
    .post('/bet/new-bet', { games })
    .then(() => {
      response = true;
      //   Notification({
      //     message: 'Suas apostas foram salvas!',
      //     type: 'success',
      //   });
    })
    .catch(
      (error) => error.response
      // ? Notification({
      //     title: 'Erro',
      //     message: `O valor mínimo autorizado é R$${minValue},00!`,
      //     type: 'danger',
      //   })
      // : Notification({
      //     message: 'Aconteceu algum erro :(',
      //     type: 'danger',
      //   })
    );
  return response;
};
