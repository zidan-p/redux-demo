const redux = require("redux");


// how to store
const createStore = redux.createStore; 
// even tough it deprecated, i use this to follow up tutorial


// ## example of action
// abstraction of action in redux


const CAKE_ORDERED = "CAKE_ORDERED"; // here the action

function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity : 1
    }
}


// How reducer structure may seem in redux

// initial state
const initialState = {
    numOfCakes: 10,
    anotherProperty: 1
}

// here the reducer
// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED :
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
}

// now to make store, we use reducer that alreadt create to define store
// because in there stored initial value.
const store = createStore(reducer)
console.log("initial state", store.getState()); // log when state first initialized

//i dunno how it work clearly. but maybe be it will called when state change
const unsubscribe =  store.subscribe(()=>console.log("update state ",store.getState())) 
// NOTE : subscribe return function than unsubscribe action

store.dispatch(orderCake()) //{ numOfCakes: 9, anotherProperty: 1 }
store.dispatch(orderCake()) //{ numOfCakes: 8, anotherProperty: 1 }
store.dispatch(orderCake()) //{ numOfCakes: 7, anotherProperty: 1 }
store.dispatch(orderCake()) //{ numOfCakes: 6, anotherProperty: 1 }
// you can also directly insert object as argument.
// however, it's better to use action creator to do this.
// maybe in next time you want to change or edit some value or properties from here
store.dispatch({
    type: CAKE_ORDERED,
    quantity : 1
})

unsubscribe();
// when use dispatch after unsubscibe, it won't show any updated log value.
// because all action to store is off from subscribe
