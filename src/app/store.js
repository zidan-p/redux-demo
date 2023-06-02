const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("./../features/cake/cakeSlice");
const reduxLogger = require("redux-logger");
const icecreamReducer = require("./../features/icecream/icecreamSlice");
const userReducer = require("./../features/user/userSlice");

// # logger middleware
const logger = reduxLogger.createLogger();

const store = configureStore({

    // # note here, if we are using redux core, we are going to use "combine reducer" midleware
    // # to combine it  middleware. but in redux toolkit, it is already prepared by to use.
    reducer: {
        cake: cakeReducer,
        iceCream : icecreamReducer,
        user: userReducer
    },

    // # how to add middleware but still using the provided middlewares
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) // turn off it for extrareducer example
})

module.exports = store;