import {createSlice} from "@reduxjs/toolkit";


const initialState ={
    theme: false
}

const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        themeChange:(state, action) => {
            state.theme=action.payload
        }
    }
});

const {reducer:themeReducer, actions}=themeSlice;
const themeActions={...actions}

export {
    themeReducer,
    themeActions
}
