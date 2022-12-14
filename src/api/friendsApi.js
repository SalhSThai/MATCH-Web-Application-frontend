import axios from '../config/axios';

export const friendsApi = userId => axios.get('/chat/getFriendsRoom');  
export const fetchChatMessageApi = (roomId,friendsId) => axios.post('/chat/getMessage',{roomId,friendsId});  

export const addMessageApi = (message,senderId,chatRoomId,time) => axios.post('/chat/addMessage',{message,senderId,chatRoomId,time});  
export const addSwipeApi = (id) => axios.post('/swipe/createSwipe',{id});  

export const fetchMatchApi = () => axios.get('/swipe/myMatch');  
export const createChatRoomApi = (matchFriendsId) => axios.post('/chat/createRoom',{id:matchFriendsId});  


