import axios from 'axios';
import { getToken } from '../helpers/UserToken';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
});

api.interceptors.request.use(function (config) {
  const token = getToken();
  if (config.headers) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
