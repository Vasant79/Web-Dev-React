/**
 *  configureStore abstraction of redux create store
 * takes only 1 param obj
 * obj have reducers
 *
 */
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slice/TodoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
