// const reduxLogger = require("redux-logger");
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./../features/cake/cakeSlice";
import userReducer from "./../features/user/userSlice";
import icecreamReducer from "./../features/icecream/icecreamSlice";

// # logger middleware
// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream : icecreamReducer,
        user: userReducer
    },

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) // turn off it for extrareducer example
})

export default store;