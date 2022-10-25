import axios from '../config/axios';

export const getAllLikeByPostId = (postId) => axios.get('/comment', postId);
export const toggleLikeByPostId = (postId) => axios.post('/comment', postId); //postId = {postId}
