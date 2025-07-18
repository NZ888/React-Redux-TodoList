import {createSlice} from '@reduxjs/toolkit'
import {deleteCategory} from "./categorySlice.js";

const initialState = {
    tasks: []
}

export const createTaskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
            console.log(initialState)
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        editTask: (state, action) => {
            const { id, title, description, categories, date} = action.payload;
            const task = state.tasks.find(task => task.id === id)
            if (!task) return;
            task.title = title
            task.description = description
            task.categories = categories
            task.date = date
        },
        doneTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            if (!task) return;

            const TAG = "completedtasks";
            task.isDone = !task.isDone;

            if (task.isDone) {
                if (!task.categories.includes(TAG)) {
                    task.categories.push(TAG);
                }
            }
            else {
                task.categories = task.categories.filter(cat => cat !== TAG);
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(deleteCategory, (state, action) => {
            state.tasks.forEach(task => {
                task.categories = task.categories.filter(c => c !== action.payload);
                if (task.categories.length === 0) {
                    task.categories.push('UnsortedTasks');
                }
            });
        });
    }
})

export const {addTask, deleteTask, editTask, doneTask} = createTaskSlice.actions;
export default createTaskSlice.reducer;