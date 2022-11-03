import axios from '../config/axios';

export const getAllInterest = () => axios.get('/admin/getAll');
export const updateInterest = (input, interestId) =>
  axios.patch(`/admin/updateInterest/${interestId}`, input);
