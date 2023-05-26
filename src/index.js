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
