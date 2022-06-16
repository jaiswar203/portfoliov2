import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value:0
}

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        winWidth: (state)=>{
            state.value=window.innerWidth
        }
    }
})


export const {increment} =counterSlice.actions
export default counterSlice.reducer