import { createSlice } from '@reduxjs/toolkit';
import { getFriendLocationApi, getFriendsNearMeApi, updateLocationApi } from '../../api/locationApi';

const LocationSlice = createSlice({
  name: 'locations',
  initialState: { location: [], friendNearMe: [], friendNearMeFirst: [] },
  reducers: {
    fetchLocation: (state, action) => {
      state.location = action.payload;
    },
    fetchFriendNearMe: (state, action) => {
      state.friendNearMe = action.payload;
      // console.log('state.friendNearMe', state.friendNearMe);
    },
    fetchFriendNearMeFirst: (state, action) => {
      state.friendNearMeFirst = action.payload;
    }
  }
});

export const thunkUpdateLocation =  ({ latitude, longitude }) =>    async (dispatch) => {
      try {
        const res = await updateLocationApi({ latitude, longitude });
      } catch (error) { }
    };



    
export const thunkFetchFriendsNearMe = () => async (dispatch) => {
  try {
    const res = await getFriendLocationApi();
    dispatch(fetchFriendNearMe(res.data));
    // console.log('res.data', res.data);
  } catch (error) { }
};
export const thunkFetchFriendsNearMeFirst = (setLoading = ()=>{}) => async (dispatch) => {
  try {
    const res = await getFriendsNearMeApi();
    dispatch(fetchFriendNearMeFirst(res.data));
    const delay = () => new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },2000)
    });
    await delay()
    
    // console.log('res.data', res.data);
  } catch (error) { }
  finally {
    setLoading(false)
  }
};
export default LocationSlice.reducer;
const { fetchLocation, fetchFriendNearMe, fetchFriendNearMeFirst } = LocationSlice.actions;
export { fetchLocation, fetchFriendNearMe, fetchFriendNearMeFirst };
