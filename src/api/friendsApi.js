import axios from '../config/axios';

export const friendsApi = userId => axios.get('/chat/getFriendsRoom');  
