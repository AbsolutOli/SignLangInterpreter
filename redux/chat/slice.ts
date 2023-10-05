import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ChatState } from "./types";

const initialState: ChatState = {
    chatItems: ["Hey There!", "I'm Oli", "How are u?"]
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers:{
        addChatItem(state, action: PayloadAction<string>){
            state.chatItems.push(action.payload);
        }
    }
})

export const {addChatItem} = chatSlice.actions;

export default chatSlice.reducer;