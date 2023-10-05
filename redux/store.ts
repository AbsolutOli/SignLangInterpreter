import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from './navigation/slice';
import chatSlice from "./chat/slice";

export const store = configureStore({
    reducer: {
        navigation: navigationSlice,
        chat: chatSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;