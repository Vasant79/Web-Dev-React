/**
 * creating slice for reducer
 *nanoid -- for random id
 * 3 steps --
 * 1-- createSlice { name , initial state , reducers}
 * 2-- provide details to all arguments
 * 3-- export destructured reducer && export default reducers
 *
 */

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //what does this state and action means
    // state -- current state , action -- contains type and payload
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
