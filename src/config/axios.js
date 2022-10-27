import axios from 'axios';
import { getAccessToken, removeAccessToken } from '../utils/localStorage';
axios.defaults.baseURL = `http://localhost:8080`;

// axios.defaults.baseURL = `https://0b7a-183-89-154-116.ap.ngrok.io`;


axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['ngrok-skip-browser-warning'] = '*';
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    console.log(err);
    if (err.response.status === '401') {
      removeAccessToken();
      return window.location.replace('/');
    }
    return Promise.reject(err);
  }
);

export default axios;
