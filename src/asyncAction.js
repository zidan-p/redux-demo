const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");


const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;



const initialState = {
    loading : true,
    data    : [],
    error   : ""
}

const FETCH_USERs_REQUESTED = `FETCH_USERs_REQUESTED`
const FETCH_USERS_SUCCEEDED = `FETCH_USERS_SUCCEEDED`
const FETCH_USERS_FAILED = `FETCH_USERS_FAILED`

const fetchUsersRequest = () => ({
    type: FETCH_USERs_REQUESTED,
})

const fetchUsersSuccess = users => ({
    type : FETCH_USERS_SUCCEEDED,
    payload : users
})

const fetchUsersFailure = error => ({
    type: FETCH_USERS_FAILED,
    payload: error
})


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERs_REQUESTED:
            return {
                ...state,
                loading : true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading : false,
                data    : action.payload,
                error   : ""
            }
        case FETCH_USERS_FAILED:
            return {
                loading : true,
                data    : [],
                error   : action.payload
            }
        default:
            return {...state}
            break;
    }
}
/**
 * 
 * i don't know why, but it seem besides object, store dispatch also accept callback.
 * just follow the rule
 * @returns cb
 */
const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const users = response.data.map(user => user.name);
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));


store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(fetchUsers());