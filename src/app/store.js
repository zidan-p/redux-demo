const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("./../features/cake/cakeSlice");
const reduxLogger = require("redux-logger");
const icecreamReducer = require("./../features/icecream/icecreamSlice");

// # logger middleware
const logger = reduxLogger.createLogger();

const store = configureStore({

    // # note here, if we are using redux core, we are going to use "combine reducer" midleware
    // # to combine it  middleware. but in redux toolkit, it is already prepared by to use.
    reducer: {
        cake: cakeReducer,
        iceCream : icecreamReducer
    },

    // # how to add middleware but still using the provided middlewares
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store;