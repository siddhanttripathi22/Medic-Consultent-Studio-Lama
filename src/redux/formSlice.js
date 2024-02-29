import { createSlice } from "@reduxjs/toolkit"



const initialState = []

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        getData : (state, action) => {
            state.push(action.payload)
        },
    }
})

export default formSlice.reducer
export const {getData} = formSlice.actions