import {configureStore, combineReducers}  from "@reduxjs/toolkit";
import tasksReducer from "../slices/tasksSlice.js";
import categoryReducer from "../slices/categorySlice.js"
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['tasks', 'category'],
}

const rootReducer = combineReducers({
    tasks: tasksReducer,
    category: categoryReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefault) =>
        getDefault({
            serializableCheck:{
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
    }),
})

export default store;
export const persistor = persistStore(store);