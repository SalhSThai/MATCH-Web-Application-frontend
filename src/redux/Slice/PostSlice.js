import { createSlice } from '@reduxjs/toolkit';
import * as postService from '../../api/postApi';

const PostSlice = createSlice({
  name: 'Post',
  initialState: { loadingState: false, posts: [] },
  reducers: {
    setLoading: (state, action) => {
      state.loadingState = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
  },
});

export default PostSlice.reducer;
export const { setPosts, setLoading, addPost } = PostSlice.actions;

export const fetchMyPosts = () => {
  return async (dispatch) => {
    try {
      await dispatch(setLoading(true));
      const res = await postService.getAllMyPost();

      dispatch(setPosts(res.data.allMyPosts));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
export const fetchMyMatchPosts = () => {
  return async (dispatch) => {
    try {
      await dispatch(setLoading(true));
      const res = await postService.getAllMyMatchPosts();

      dispatch(setPosts(res.data.allMyMatchPosts));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
