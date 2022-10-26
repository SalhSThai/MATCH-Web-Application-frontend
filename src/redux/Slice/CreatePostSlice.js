import { createSlice } from '@reduxjs/toolkit';

const CreatePostSlice = createSlice({
  name: 'CreatePost',
  initialState: { CreatePostState: {} },
  reducers: {
    setCreatePost: (state, action) => {
      state.CreatePostState[action.payload.name] = action.payload.value;
    },
  },
});

export default CreatePostSlice.reducer;
const { setCreatePost } = CreatePostSlice.actions;
export { setCreatePost };
