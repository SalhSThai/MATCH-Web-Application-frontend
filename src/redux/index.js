import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slice/AuthSlice';
import loadingReducer from './Slice/LoadingSlice';
import friendsReducer from './Slice/FriendsSlice';
import locationReducer from './Slice/LocationSlice';
import PostReducer from './Slice/PostSlice';
import CreatePostReducer from './Slice/CreatePostSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    friends: friendsReducer,
    locations: locationReducer,
    posts: PostReducer,
    createPost: CreatePostReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
