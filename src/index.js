const redux = require("redux");


const createStore = redux.createStore; 
const bindActionCreators = redux.bindActionCreators; // # bind action creators
const comnbineReducers = redux.combineReducers; // # here to combine reducer

// # all action name
const CAKE_ORDERED = "CAKE_ORDERED"; 
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// # action creator
const orderCake = (qty = 1) => ({
    type    : CAKE_ORDERED,
    payload : qty
})
const restockCake = (qty = 1) => ({
    type    : CAKE_RESTOCKED,
    payload : qty
})
const orderIcecream = (qty = 1 ) => ({
    type    : ICECREAM_ORDERED,
    payload : qty
})
const restockIcecream = (qty = 1) => ({
    type    : ICECREAM_RESTOCKED,
    payload : qty
})


// # split it all
const initialCakeState = {numOfCakes : 10}
const initialIcecreamState = {numOfIcecream : 10}


const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED :
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        case CAKE_RESTOCKED :
            return {
                ...state,
                numOfCakes : state.numOfCakes + action.payload
            }
        default:
            return state;
    }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED :
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - action.payload
            }
        case ICECREAM_RESTOCKED :
            return {
                ...state,
                numOfIcecream : state.numOfIcecream + action.payload
            }
        default:
            return state;
    }
}

// # combined reducer
const rootReducer = comnbineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

// create store
const store = createStore(rootReducer)
console.log("initial state", store.getState()); // log when state first initialized


const unsubscribe =  store.subscribe(()=>console.log("update state ",store.getState())) 
// NOTE : subscribe return function than unsubscribe action

// # action
const actions = bindActionCreators({orderCake, restockCake, orderIcecream, restockIcecream},store.dispatch);

// cakes
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(5);

// ice cream
actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(3);

unsubscribe();
// when use dispatch after unsubscibe, it won't show any updated log value.
// because all action to store is off from subscribe
