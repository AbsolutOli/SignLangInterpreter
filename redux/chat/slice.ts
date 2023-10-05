import { createSlice } from "@reduxjs/toolkit"
import { ChatState } from "./types";

const initialState: ChatState = {
    chatItems: ["Hey There!", "I'm Oli", "How are u?"]
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers:{

    }
})

export default chatSlice.reducer;