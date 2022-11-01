import axios from '../config/axios';

export const updateLocationApi = ({ latitude, longitude }) =>
  axios.put('/nearme/updatelocation', { latitude, longitude });

export const getFriendLocationApi = () => axios.get('/nearme/friendlocation');


export const getFriendsNearMeApi = () => axios.get('/swipe/friendsInfo');

