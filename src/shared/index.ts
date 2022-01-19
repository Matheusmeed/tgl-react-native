import { passRegex, emailRegex, nameRegex } from './helpers/Regex';
import { getToken } from './helpers/UserToken';
import { updateUser, createUser } from './services/user';
import { listGames } from './services/games';
import { listBet, newBet } from './services/bets';
import { login, changePass, resetPass } from './services/auth';
import {
  alertDanger,
  alertInfo,
  alertSuccess,
  alertWarning,
} from './helpers/Functions';
import { formatDate, formatPrice } from './helpers/Functions';

export {
  passRegex,
  emailRegex,
  nameRegex,
  formatPrice,
  formatDate,
  getToken,
  updateUser,
  createUser,
  listBet,
  listGames,
  newBet,
  login,
  changePass,
  resetPass,
  alertDanger,
  alertInfo,
  alertWarning,
  alertSuccess,
};
