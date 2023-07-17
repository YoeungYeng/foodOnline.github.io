import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
    name: 'cartUi',
    initialState: {cartUiSlice: false},
    reducers:{
        toggle(state){
            state.cartUiSlice = !state.cartUiSlice
        }
    }
})
export const cartUiActions = cartUiSlice.actions
export default cartUiSlice