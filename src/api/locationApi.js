import axios from '../config/axios';

export const updateLocationApi = ({ latitude, longitude }) =>
  axios.put('/nearme/updatelocation', { latitude, longitude });
