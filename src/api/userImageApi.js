import axios from '../config/axios';

export const createImage = () => axios.post('/userImage');
export const getUserImageByUserId = (userId) => axios.get('/userImage', userId);
export const deleteUserImagebyuserImageId = (userImageId) =>
  axios.delete('/userImage', userImageId);
