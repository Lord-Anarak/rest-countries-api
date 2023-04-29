import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name:'global',
    initialState: {darkMode:false},
    reducers: {
        setDarkMode: state => {state.darkMode = !state.darkMode},
    }
})

export const {setDarkMode} = globalSlice.actions

export default globalSlice.reducer