import axios from '../config/axios';

export const friendsApi = userId => axios.get('/chat/getFriendsRoom');  
export const fetchChatMessageApi = (roomId,friendsId) => axios.post('/chat/getMessage',{roomId,friendsId});  

export const addMessageApi = (message,senderId,chatRoomId,time) => axios.post('/chat/addMessage',{message,senderId,chatRoomId,time});  
export const addSwipeApi = (info) => axios.post('/swipe/createSwipe',info);  



