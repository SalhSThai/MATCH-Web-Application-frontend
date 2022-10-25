import axios from '../config/axios';

export const friendsApi = userId => axios.get('/chat/getFriendsRoom');  
export const addMessageApi = (message,senderId,chatRoomId) => axios.post('/chat/addMessage',{message,senderId,chatRoomId});  

