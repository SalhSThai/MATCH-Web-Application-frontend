import axios from '../config/axios';

export const registerApi = input => axios.post('/auth/register', input);
export const loginApi = (input) =>  axios.post('/auth/login', input);
export const rememberMeApi = () => axios.post('/auth/me');
