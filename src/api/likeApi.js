import axios from '../config/axios';

export const getAllLikeByPostId = (postId) => axios.get('/like', postId);
export const toggleLikeByPostId = (postId) => axios.post('/like', postId); //postId = {postId}
