import {configureStore}  from "@reduxjs/toolkit";
import tasksReducer from "../slices/tasksSlice.js";
import categoryReducer from "../slices/categorySlice.js"
export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        category: categoryReducer,
    }
})

export default store;