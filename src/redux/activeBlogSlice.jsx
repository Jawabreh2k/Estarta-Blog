import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeBlog: null,
};

const activeBlogSlice = createSlice({
  name: "activeBlog",
  initialState,
  reducers: {
    setActiveBlog: (state, action) => {
      state.activeBlog = action.payload;
    },
    clearActiveBlog: (state) => {
      state.activeBlog = null;
    },
  },
});

export const { setActiveBlog, clearActiveBlog } = activeBlogSlice.actions;
export default activeBlogSlice.reducer;
