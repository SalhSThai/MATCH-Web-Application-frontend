import { createSlice } from '@reduxjs/toolkit';

const CreatePostSlice = createSlice({
  name: 'CreatePost',
  initialState: { CreatePostState: {} },
  reducers: {
    setCreatePost: (state, action) => {
      state.CreatePostState[action.payload.name] = action.payload.value;
    },
    resetCreatePost: (state, action) => {
      state.CreatePostState = { text: '', image: '' };
    },
  },
});

export default CreatePostSlice.reducer;
const { setCreatePost, resetCreatePost } = CreatePostSlice.actions;
export { setCreatePost, resetCreatePost };
