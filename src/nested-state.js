const redux = require("redux");
const produce = require("immer").produce;

/**
 * Immer (German for: always) is a tiny package that allows 
 * you to work with immutable state in a more convenient way.
 * with this we have no worries about handling state.
 */

const createStore = redux.createStore;


const initialState = {
    name : "Zidan",
    address : {
        street : "jalan kapiminda 12",
        city : "malang",
        state : "malang raya"
    }
}


const STREET_UPDATED = "STREET_UPDATED";
const updateStreet = (street) => ({
    type: STREET_UPDATED,
    payload : street
});


const reducer = (state = initialState, action) => {
    switch(action.type){
        case STREET_UPDATED:
            // # example if not using immer
            // it has to be like this because the state has to be untouchable.
            // ofcource it will be a messy when the nesting level is hihger.
            // to prevent that, it's time to use immer.
            // return{
            //     ...state,
            //     address : {
            //         ...state.address,
            //         street : action.payload
            //     }
            // }
        
            // # when using immer
            // see, even with out doc, maybe you can understand how it work
            // in high level.
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(()=>console.log("update state ",store.getState()))


store.dispatch(updateStreet("jalan bajul mati"));

unsubscribe();



