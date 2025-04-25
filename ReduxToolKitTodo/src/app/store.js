import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todo/todoSlice"
import { loadState,saveState } from "../localStorage/localStorage";

const preloadedState = {
    todo: loadState() || {todos: []}
};

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    preloadedState
});

store.subscribe(()=>{
    saveState(store.getState().todo);
})