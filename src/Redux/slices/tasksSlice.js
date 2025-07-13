import {createSlice} from '@reduxjs/toolkit'

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
        }
    }
})

export const {addTask, deleteTask, editTask} = createTaskSlice.actions;
export default createTaskSlice.reducer;