import axios from '../config/axios';

export const getAllInterest = () => axios.get('/admin/getAll');
