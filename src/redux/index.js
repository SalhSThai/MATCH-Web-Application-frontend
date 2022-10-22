
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Slice/AuthSlice';
import loadingReducer from './Slice/LoadingSlice';
import friendsReducer from './Slice/FriendsSlice';


  export const store = configureStore({
    reducer:{
      auth: authReducer,
      loading:loadingReducer,
      friends:friendsReducer

    }
    
  })
