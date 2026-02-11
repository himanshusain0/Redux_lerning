import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/serachSlice'
export const store = configureStore({
    reducer:{
        search:searchReducer
    }
})
