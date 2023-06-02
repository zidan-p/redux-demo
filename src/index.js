const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions = require("./features/icecream/icecreamSlice").icecreamActions;
const fetchUser = require("./features/user/userSlice").fetchUser;


console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log(store.getState()); // for extra reducer
});


// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(5));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(5));

store.dispatch(fetchUser());

// because fetchUser is async function, we can comment it, i don't know how it work but it work
// unsubscribe(); 

