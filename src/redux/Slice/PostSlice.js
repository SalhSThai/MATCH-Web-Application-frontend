import { createSlice } from '@reduxjs/toolkit';
import * as postService from '../../api/postApi';
import * as commentService from '../../api/commentApi';
import * as likeService from '../../api/likeApi';

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
    addComment: (state, action) => {
      const idx = state.posts.findIndex((i) => i.id === action.payload.postId);
      console.log(idx);
      state.posts[idx]?.Comments.push(action.payload.content);
    },
    deleteLike: (state, action) => {
      const idx = state.posts.findIndex((i) => i.id === action.payload.postId);

      const likeidx = state.posts[idx]?.Likes.findIndex(
        (i) => i.id === action.payload.likeId
      );
      console.log(likeidx);

      state.posts[idx]?.Likes.splice(likeidx, 1);
    },
    addLike: (state, action) => {
      const idx = state.posts.findIndex((i) => i.id === action.payload.postId);

      state.posts[idx]?.Likes.push(action.payload);
    },
  },
});

export default PostSlice.reducer;
export const {
  setPosts,
  setLoading,
  addPost,
  addComment,
  addLike,
  deleteLike,
} = PostSlice.actions;

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
export const CreatePost = (data) => {
  return async (dispatch) => {
    try {
      await dispatch(setLoading(true));
      const res = await postService.createPost(data);

      dispatch(addPost(res.data.createdPost));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const createComment = (data) => {
  return async (dispatch) => {
    await dispatch(setLoading(true));
    const res = await commentService.createComment(data);

    await dispatch(
      addComment({
        postId: res.data.createCommentRes.postId,
        content: res.data.createCommentRes,
      })
    );
    await dispatch(setPosts({ loadingState: false, posts: [] }));
    try {
    } catch (err) {
      console.log(err);
    }
  };
};
export const toggleCommentthunk = (data) => {
  return async (dispatch) => {
    await dispatch(setLoading(true));
    const res = await commentService.createComment(data);

    dispatch(
      addComment({
        postId: res.data.createCommentRes.postId,
        content: res.data.createCommentRes,
      })
    );
    try {
    } catch (err) {
      console.log(err);
    }
  };
};
export const toggleLikethunk = (postId) => {
  return async (dispatch) => {
    await dispatch(setLoading(true));
    const res = await likeService.toggleLikeByPostId(postId);

    if (res.data?.message === 'unliked') {
      console.log(res.data);
      dispatch(
        deleteLike({
          likeId: res.data.isLike.id,
          postId: res.data.isLike.postId,
        })
      );
    } else {
      dispatch(addLike(res.data.createdLikeRes));
    }
    try {
    } catch (err) {
      console.log(err);
    }
  };
};
