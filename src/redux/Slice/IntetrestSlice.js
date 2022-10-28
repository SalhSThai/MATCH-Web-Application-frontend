import { createSlice } from '@reduxjs/toolkit';
import { getAllInterest } from '../../api/interestApi';

const InterestSlice = createSlice({
  name: 'interest',
  initialState: { allInterest: [] },
  reducers: {
    fetchInterest: (state, action) => {
      state.allInterest = action.payload;
    }
  }
});

export const thunkFetchInterest = () => async (dispatch) => {
  try {
    const res = await getAllInterest();
    dispatch(fetchInterest(res.data.allInterest));
  } catch (error) {}
};

export default InterestSlice.reducer;
const { fetchInterest } = InterestSlice.actions;
export { fetchInterest };
