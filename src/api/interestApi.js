import axios from '../config/axios';

export const getAllInterest = () => axios.get('/admin/getAll');

export const createInterest = (input) =>
  axios.post('/admin/createInterest', input);

export const updateInterest = (input, interestId) =>
  axios.patch(`/admin/updateInterest/${interestId}`, input);

export const deleteInterest = (interestId) =>
  axios.delete(`/admin/deleteInterest/${interestId}`);
