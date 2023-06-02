import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    numOfCakes: 10
}

const cakeSlice  = createSlice({
    name: "cake",
    initialState,

    // # when we difine the reducer here, redux toolkit automaticaly create a reducer function with same
    // # name where it define.
    // # we call it later.
    reducers : {
        // # state parameter is the current state that active in store
        // # its value can be change directly as if its mutable
        // # don't worry about the mutability of it value, it have been hanle by "immer library"
        ordered : state => {state.numOfCakes--},

        // # the action parameter are data that pass when dispatch function called.
        // # there are 2 default value that hold in the action: type and payload.
        restocked : (state, action) => {state.numOfCakes += action.payload}

        // # NOTE : immer will error when it return a value, i haven't know how it work.
        // # next time remeber to use curly bracket 
    }
})


export default cakeSlice.reducer;
export const {ordered, restocked} = cakeSlice.actions; // named function


