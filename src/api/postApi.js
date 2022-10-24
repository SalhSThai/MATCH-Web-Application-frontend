import axios from '../config/axios';

export const getAllMyPost = () => axios.get('/post/');
export const getAllMyMatchPosts = () => axios.get('/post/mymatch');
export const getAllPosts = () => axios.get('/post/all');
export const deletePostById = (postId) => axios.delete(`/post/${postId}`);
export const createPost = (data) => axios.post('/post/', data);
export const editPostById = (data) => axios.patch('/post/', data);
