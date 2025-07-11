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
        }
    }
})

export const {addTask, deleteTask} = createTaskSlice.actions;
export default createTaskSlice.reducer;