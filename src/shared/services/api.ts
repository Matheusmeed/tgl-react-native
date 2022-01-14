import axios from 'axios';
import { getToken } from '../helpers/UserToken';

const api = axios.create({
  baseURL: 'http://192.168.0.57:3333',
});

api.interceptors.request.use(async function (config) {
  const token = await getToken();
  if (config.headers) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
