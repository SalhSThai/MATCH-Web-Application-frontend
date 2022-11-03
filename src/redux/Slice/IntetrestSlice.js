import { createSlice } from '@reduxjs/toolkit';
import {
  createInterest,
  getAllInterest,
  updateInterest
} from '../../api/interestApi';
import { loading } from './LoadingSlice';

const InterestSlice = createSlice({
  name: 'interest',
  initialState: { allInterest: [], getInformationState: {} },
  reducers: {
    fetchInterest: (state, action) => {
      state.allInterest = action.payload;
    },
    information: (state, action) => {
      state.getInformationState = action.payload;
    }
  }
});

export const thunkFetchInterest = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await getAllInterest();
    dispatch(fetchInterest(res.data.allInterest));
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};

export const thunkCreateInterest = (input) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await createInterest(input);
    dispatch(information(res.data));
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};

export const thunkUpdateInterest = (input, interestId) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await updateInterest(input, interestId);
    dispatch(information(res.data));
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};

export default InterestSlice.reducer;
const { fetchInterest, information } = InterestSlice.actions;
export { fetchInterest, information };
