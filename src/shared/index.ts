import { passRegex, emailRegex, nameRegex } from '@shared/helpers/Regex';
import { getToken } from '@shared/helpers/UserToken';
import { updateUser, createUser } from '@shared/services/user';
import { listGames } from '@shared/services/games';
import { listBet, newBet } from '@shared/services/bets';
import { login, changePass, resetPass } from '@shared/services/auth';
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
