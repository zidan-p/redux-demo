const redux = require("redux");


const createStore = redux.createStore; 
const bindActionCreators = redux.bindActionCreators; // # bind action creators


// # all action name
const CAKE_ORDERED = "CAKE_ORDERED"; 
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// # action creator
const orderCake = () => ({
    type: CAKE_ORDERED,
    payload : 1
})
const restockCake = (qty = 1) => ({
    type : CAKE_RESTOCKED,
    payload: qty
})


const initialState = {
    numOfCakes: 10,
    anotherProperty: 1
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED :
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED :
            return {
                ...state,
                numOfCakes : state.numOfCakes + action.quantity
            }
        default:
            return state;
    }
}

// create store
const store = createStore(reducer)
console.log("initial state", store.getState()); // log when state first initialized


const unsubscribe =  store.subscribe(()=>console.log("update state ",store.getState())) 
// NOTE : subscribe return function than unsubscribe action

// # action
const actions = bindActionCreators({orderCake, restockCake},store.dispatch);
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderCake()

actions.restockCake(5);

unsubscribe();
// when use dispatch after unsubscibe, it won't show any updated log value.
// because all action to store is off from subscribe
