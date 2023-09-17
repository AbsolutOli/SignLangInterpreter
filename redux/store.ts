import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from './navigation/slice'

export const store = configureStore({
    reducer: {
        navigation: navigationSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;