import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    category: [
        { label: 'Work', value: 'work' },
        { label: 'Home', value: 'home' },
    ]
}

export const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        addCategory: (state, action) => {
            state.category.push(action.payload);
        },
        deleteCategory: (state, action) => {
            state.category = state.category.filter((item) => item.value !== action.payload);
        }
    }
})

export const {addCategory,deleteCategory} = categorySlice.actions;
export default categorySlice.reducer;