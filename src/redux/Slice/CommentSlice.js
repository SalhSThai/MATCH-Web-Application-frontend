import { createSlice } from '@reduxjs/toolkit';
import * as CommentService from '../../api/commentApi';

const CommentSlice = createSlice({
  name: 'Comment',
  initialState: {
    loadingState: false,
    createComment: '',
  },
  reducers: {
    setcreateComment: (state, action) => {
      state.createComment = action.payload;
    },
    setLoading: (state, action) => {
      state.loadingState = action.payload;
    },
  },
});

export default CommentSlice.reducer;
export const { setcreateComment, setLoading } = CommentSlice.actions;

export const createComment = (data) => {
  return async (dispatch) => {
    await dispatch(setLoading(true));
    const res = await CommentService.createComment(data);

    dispatch(setcreateComment(res.data.createCommentRes));
    try {
    } catch (err) {
      console.log(err);
    }
  };
};
