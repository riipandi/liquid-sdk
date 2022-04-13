import axios from 'axios';
import { throwError } from './exception';

const fetcher = axios.create({
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

fetcher.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 401) {
      throwError(401, `Unauthenticated`);
    }
    console.error('Problem status code: ' + error.response.status);
    return Promise.reject(error);
  },
);

const getRequest = async (url: string, config: any) => {
  fetcher.defaults.baseURL = config.apiUrl;
  fetcher.defaults.auth = { username: config.resellerId, password: config.apiKey };
  return await fetcher.get(url);
};

const putRequest = async (url: string, config: any, data: any) => {
  fetcher.defaults.baseURL = config.apiUrl;
  fetcher.defaults.auth = { username: config.resellerId, password: config.apiKey };
  return await fetcher.put(url, data);
};

export { getRequest, putRequest };

export default fetcher;
