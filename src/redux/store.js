import { configureStore } from "@reduxjs/toolkit";
import searchFieldReducer from './searchFieldSlice'

export const store = configureStore({
    reducer: {
        searchField: searchFieldReducer
    }
})