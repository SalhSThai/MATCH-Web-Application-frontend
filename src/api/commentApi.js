import axios from '../config/axios';

export const createComment = (data) => axios.post('/comment', data); //data = { postId, content, userId }
export const getAllCommentByPostId = (postId) => axios.get('/comment', postId); //postId = {postId}
export const deleteCommentById = (commentId) =>
  axios.delete('/comment', commentId); //commentId = { commentId }
