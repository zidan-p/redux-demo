const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");


// # how to do asyncrequest in redux toolkit
const initialState = {
    loading: false,
    users: [],
    error: ""
};


// # generate pending, fulfilled, and rejected actions types
const fetchUser = createAsyncThunk("user/fetchUsers",()=>{
    return axios
        .get("https://jsonplaceholder.typicode.com/users")
        // .then(res => {
        //     console.log(res.data);
        //     return res;
        // })
        .then(response => response.data.map(user => user.name))
})


const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, state => {state.loading = true});
        builder.addCase(fetchUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.users = action.payload,
            state.error = ""
        })
        builder.addCase(fetchUser.rejected, (state, action)=>{
            state.loading = false;
            state.users = [],
            state.error = action.error.message
        })
    }
})


module.exports = userSlice.reducer;
module.exports.fetchUser = fetchUser;


