import { createSlice } from "@reduxjs/toolkit";
import { addMessageApi, addSwipeApi, createChatRoomApi, fetchChatMessageApi, fetchMatchApi, friendsApi } from "../../api/friendsApi";


const FriendsSlice = createSlice({
  name: 'friends',
  initialState: { allChatRooms: [], currentRoomInfo: {}, recentChat: {}, recentTrigle: { shake: false, color: false }, count: 0, currentSlice: {}, showUpModalMatch: false, myMatchFriends: [] },
  reducers: {
    fetchFriends: (state, action) => {
      state.allChatRooms = action.payload
    },
    fetchMessage: (state, action) => {
      state.currentRoomInfo = action.payload
    },
    reduxRecentChat: (state, action) => {
      state.recentChat = action.payload
    },
    reduxRecentTrigle: (state, action) => {
      state.recentTrigle = action.payload
    },
    reduxCount: (state, action) => {
      state.count = state.count - action.payload
    },
    reduxResetCount: (state, action) => {
      state.count = action.payload
    },
    reduxSetCurrentSlice: (state, action) => {
      state.currentSlice = action.payload
    },
    reduxSetShowUpModalMatch: (state, action) => {
      state.showUpModalMatch = action.payload
    },
    reduxFetchMatchFriends: (state, action) => {
      state.myMatchFriends = action.payload
    }
  }
})


export const thunkFetchFriends = (userId) => async dispatch => {
  try {
    const res = await friendsApi(userId) 
    console.log(res.data);
    dispatch(fetchFriends(res.data))
  } catch (error) {

  }
}
export const thunkFetchMessage = (roomId, friendId) => async dispatch => {
  try {
    const res = await fetchChatMessageApi(roomId, friendId)
    dispatch(fetchMessage(res.data))
  } catch (error) {

  }
}
export const thunkAddMessage = (message, senderId, chatRoomId, time) => async dispatch => {
  try {
    const res = await addMessageApi(message, senderId, chatRoomId, time)
  } catch (error) {

  }
}

export const thunkSwipe = (id) => async dispatch => {
  try {
    const res = await addSwipeApi(id)
    console.log(res.data);

  } catch (error) {

  }
}
export const thunkFetchMatch = () => async dispatch => {
  try {
    const res = await fetchMatchApi()
    dispatch(reduxFetchMatchFriends(res.data))
    console.log(res.data);

  } catch (error) {

  }
}
export const thunkCreateRoom = ({ userId, matchFriendsId }) => async dispatch => {
  try {
    console.log(matchFriendsId);
    await createChatRoomApi(matchFriendsId)
    const res = await friendsApi(userId)
    console.log(res.data);
    dispatch(fetchFriends(res.data))

    console.log(res.data);


  } catch (error) {

  }
}

export default FriendsSlice.reducer;
const { fetchFriends, fetchMessage, reduxRecentChat, reduxRecentTrigle, reduxCount, reduxResetCount, reduxSetCurrentSlice, reduxSetShowUpModalMatch, reduxFetchMatchFriends } = FriendsSlice.actions;
export { fetchFriends, fetchMessage, reduxRecentChat, reduxRecentTrigle, reduxCount, reduxResetCount, reduxSetCurrentSlice, reduxSetShowUpModalMatch, reduxFetchMatchFriends };