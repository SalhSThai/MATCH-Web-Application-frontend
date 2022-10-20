import axios from '../config/axios';

export const friendsApi = userId => axios.post('/chatapp/fetchFriends', {userId}); 
