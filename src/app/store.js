import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../features/global";
import { api } from "../api/apiSlice";

const store = configureStore({
    reducer: {
        global: globalReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefault) => getDefault().concat(api.middleware),
    devTools: true,
})

export default store