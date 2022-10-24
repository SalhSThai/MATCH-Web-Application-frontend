import { createSlice } from "@reduxjs/toolkit";
import { friendsApi } from "../../api/friendsApi";


const FriendsSlice = createSlice({
    name: 'friends',
    initialState: { allFriends: [] },
    reducers: {
        fetchFriends: (state, action) => {
            state.allFriends = action.payload
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


export default FriendsSlice.reducer
const { fetchFriends } = FriendsSlice.actions;
export { fetchFriends }