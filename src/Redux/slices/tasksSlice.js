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
        }
    }
})

export const {addTask} = createTaskSlice.actions;
export default createTaskSlice.reducer;