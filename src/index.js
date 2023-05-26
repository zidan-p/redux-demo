// ## example of action
// abstraction of action in redux


const CAKE_ORDERED = "CAKE_ORDERED"; // here the action

function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity : 1
    }
}


