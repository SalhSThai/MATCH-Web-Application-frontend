import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slice/AuthSlice';
import loadingReducer from './Slice/LoadingSlice';
import friendsReducer from './Slice/FriendsSlice';
import PostReducer from './Slice/PostSlice';
import CreatePostReducer from './Slice/CreatePostSlice';
import CommentReducer from './Slice/CommentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    friends: friendsReducer,
    posts: PostReducer,
    createPost: CreatePostReducer,
    comment: CommentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
