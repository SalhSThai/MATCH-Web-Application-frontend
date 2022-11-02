import { createSlice } from '@reduxjs/toolkit';
import { getAllMySwipe, getAllSwipedMe } from '../../api/swipeApi';

const SwipeSlice = createSlice({
  name: 'swipe',
  initialState: { wholikeme: [], whoILike: [] },
  reducers: {
    fetchAllSwipeMe: (state, action) => {
      state.wholikeme = action.payload;
    },
    fetchAllMySwipe: (state, action) => {
      state.whoILike = action.payload;
    }
  }
});

export const thunkFetchAllSwipedMe = () => async (dispatch) => {
  try {
    const res = await getAllSwipedMe();
    dispatch(fetchAllSwipeMe(res.data.wholikeme));
  } catch (error) {}
};

export const thunkFetchAllMySwipe = () => async (dispatch) => {
  try {
    const res = await getAllMySwipe();
    dispatch(fetchAllMySwipe(res.data.whoILike));
  } catch (error) {}
};

export default SwipeSlice.reducer;
const { fetchAllMySwipe, fetchAllSwipeMe } = SwipeSlice.actions;
export { fetchAllMySwipe, fetchAllSwipeMe };
