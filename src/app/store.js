const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("./../features/cake/cakeSlice");
const icecreamReducer = require("./../features/icecream/icecreamSlice");


const store = configureStore({

    // # note here, if we are using redux core, we are going to use "combine reducer" midleware
    // # to combine it  middleware. but in redux toolkit, it is already prepared by to use.
    reducer: {
        cake: cakeReducer,
        iceCream : icecreamReducer
    }
})

module.exports = store;