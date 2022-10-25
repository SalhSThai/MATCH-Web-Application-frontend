import { createSlice } from "@reduxjs/toolkit";
import { addMessageApi, friendsApi } from "../../api/friendsApi";


const FriendsSlice = createSlice({
    name: 'friends',
    initialState: { allChatRooms: [] },
    reducers: {
        fetchFriends: (state, action) => {
            state.allChatRooms = action.payload
        },
    }
})


export const thunkFetchFriends = (userId) => async dispatch => {
  try {
    const res = await friendsApi(userId)
    dispatch(fetchFriends(res.data))
  } catch (error) {
    
  }
}
export const thunkAddMessage = (message,senderId,chatRoomId) => async dispatch => {
  try {
    const res = await addMessageApi(message,senderId,chatRoomId)
  } catch (error) {
    
  }
}

export default FriendsSlice.reducer
const { fetchFriends } = FriendsSlice.actions;
export { fetchFriends }