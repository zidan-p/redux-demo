const redux = require("redux");

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

const store = createStore(reducer);