import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slice/AuthSlice';
import loadingReducer from './Slice/LoadingSlice';
import friendsReducer from './Slice/FriendsSlice';
import interestReducer from './Slice/IntetrestSlice';
import locationReducer from './Slice/LocationSlice';
import PostReducer from './Slice/PostSlice';
import CreatePostReducer from './Slice/CreatePostSlice';
import CommentReducer from './Slice/CommentSlice';
import SwipeReducer from './Slice/SwipeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    friends: friendsReducer,
    locations: locationReducer,
    posts: PostReducer,
    createPost: CreatePostReducer,
    comment: CommentReducer,
    interest: interestReducer,
    swipe: SwipeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
