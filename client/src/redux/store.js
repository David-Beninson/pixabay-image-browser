import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    images: imageReducer,
  },
});

export default store;
