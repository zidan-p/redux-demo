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
                numOfCake: state.numOfCakes - 1
            }
        default:
            return state;
    }
}

// now to make store, we use reducer that alreadt create to define store
// because in there stored initial value.
const store = createStore(reducer)
console.log("initial state", store.getState()); // you can get all or some state with this

store.subscribe(()=>console.log("update state",store.getState())) //i dunno how it wirk clearly. but maybe be it will called when 

store.dipatch(orderCake())
store.dipatch(orderCake())
store.dipatch(orderCake())
store.dipatch(orderCake())


