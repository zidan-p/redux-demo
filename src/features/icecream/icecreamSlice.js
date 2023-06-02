const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    numOfIcecream : 20
}

const icecreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        ordered: state => {state.numOfIcecream++},
        restocked : (state, action) => {state.numOfIcecream += action.payload}
    },
    /**
     * extraReducers allows createSlice to respond to other action types besides the types it has generated.
     * that's mean, if we already define in extra reducer, defined external action that occured can trigger
     * it reducer. 
     * 
     * # EXAMPLE:
     * i want to make promotion for this store. every cake purcashed, the store will also give an ice cream for customer.
     * from case above, the flow from action maybe like this.
     * 
     * // and this will be have to present in code when we want that case
     * cake.ordered();
     * icecream.ordered();
     * 
     * the code may looks fine, but what if when we want to access many store.
     * that's may be dificult for us to work with, even if we manage to use function to abstract them.
     * 
     * to handle that redux provided `extraReducers` for us. it will make external slice (or action)
     * can access or change it's state. 
     * 
     * cake.ordered() // it also going to order icecream
     */

    // # Method 1 "map object" notation
    // we can directly pass the action string to its key access. but in RTK doc its recomended
    // to use builder callback for it extrareduce. if you you do this it's recomended to
    // use const from import targeted slice. 
    // the function flow still same like ordinary reducer
    // extraReducers: {
    //     ["cake/ordered"] : state => {state.numOfIcecream-- }
    // }

    // # Method 2 "builder callback" notation
    // here how, we can understand it from the structure

    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {state.numOfIcecream--}) 
    }
})


module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;