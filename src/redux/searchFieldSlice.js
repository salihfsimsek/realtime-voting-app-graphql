import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ''
}

export const searchFieldSlice = createSlice({
    name: 'searchField',
    initialState,
    reducers: {
        changeSearchField: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeSearchField } = searchFieldSlice.actions

export default searchFieldSlice.reducer