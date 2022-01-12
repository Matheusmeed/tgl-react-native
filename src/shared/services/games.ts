import api from './api';

export const listGames = async () => {
  let response;
  await api
    .get('/cart_games')
    .then((res) => {
      response = [res.data, res.data.types[0]];
    })
    .catch(() => {});

  return response;
};
