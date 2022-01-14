import { alertDanger, alertSuccess } from '../helpers/Functions';
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
      alertDanger('Ocorreu algum erro!');
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
      alertSuccess('Suas apostas foram salvas!');
    })
    .catch((error) =>
      error.response
        ? alertDanger('Erro', `O valor mínimo autorizado é R$${minValue},00!`)
        : alertDanger('Aconteceu algum erro :(')
    );
  return response;
};
