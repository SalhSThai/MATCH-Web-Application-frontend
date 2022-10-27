import { createSlice } from '@reduxjs/toolkit';
import { getFriendLocationApi, updateLocationApi } from '../../api/locationApi';

const LocationSlice = createSlice({
  name: 'locations',
  initialState: { location: [], friendNearMe: [] },
  reducers: {
    fetchLocation: (state, action) => {
      state.location = action.payload;
    },
    fetchFriendNearMe: (state, action) => {
      state.friendNearMe = action.payload;
      // console.log('state.friendNearMe', state.friendNearMe);
    }
  }
});

export const thunkUpdateLocation =
  ({ latitude, longitude }) =>
  async (dispatch) => {
    try {
      const res = await updateLocationApi({ latitude, longitude });
    } catch (error) {}
  };

export const thunkFetchFriendsNearMe = () => async (dispatch) => {
  try {
    const res = await getFriendLocationApi();
    dispatch(fetchFriendNearMe(res.data));
    // console.log('res.data', res.data);
  } catch (error) {}
};

export default LocationSlice.reducer;
const { fetchLocation, fetchFriendNearMe } = LocationSlice.actions;
export { fetchLocation, fetchFriendNearMe };
