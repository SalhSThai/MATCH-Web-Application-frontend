import { createSlice } from '@reduxjs/toolkit';

const currentChatSlice = createSlice({
  name: 'loading',
  initialState: { chat: [] },
  reducers: {
    setChat: (state, action) => {
      state.chat = action.payload;
    },
  },
});

export default currentChatSlice.reducer;
export const { setChat } = currentChatSlice.actions;

const setChatByOtherId = () => {
  return async (dispatch) => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
};
