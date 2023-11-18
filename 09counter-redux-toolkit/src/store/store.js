import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })
