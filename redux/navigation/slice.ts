import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { NavigationState } from './types'

const initialState: NavigationState = {
    navItems: ["Rooms", "Friends", "Settings"],
    burgerState: false,
}

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers:{
        setBurgerState(state, action: PayloadAction<boolean>){
            state.burgerState = action.payload;
        }
    }
})

export const {setBurgerState} = navigationSlice.actions;

export default navigationSlice.reducer;