import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./blogsReducer";
import activeBlogReducer from "./activeBlogSlice";

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    activeBlog: activeBlogReducer,
  },
});

export default store;
