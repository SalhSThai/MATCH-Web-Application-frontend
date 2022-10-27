import { createSlice } from '@reduxjs/toolkit';
import { updateLocationApi } from '../../api/locationApi';

const LocationSlice = createSlice({
  name: 'locations',
  initialState: { location: [] },
  reducers: {
    fetchLocation: (state, action) => {
      state.location = action.payload;
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

export default LocationSlice.reducer;
const { fetchLocation } = LocationSlice.actions;
export { fetchLocation };
