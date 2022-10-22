import { createSlice } from "@reduxjs/toolkit";
import { friendsApi } from "../../api/friendsApi";


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
    console.log(res.data);
    dispatch(fetchFriends(res.data))
  } catch (error) {
    
  }
}


export default FriendsSlice.reducer
const { fetchFriends } = FriendsSlice.actions;
export { fetchFriends }