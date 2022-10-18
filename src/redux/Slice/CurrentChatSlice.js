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
const { loading } = currentChatSlice.actions;
export { loading };
