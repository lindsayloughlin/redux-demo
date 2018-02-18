import {AUTH_USER, AUTH_ERROR, UNAUTH_USER} from "../actions/types";

export default function (state = {}, action) {
    //console.log(`auth state ${state} action ${action.type}`)
    switch (action.type) {
        case AUTH_USER: {
            return {...state, error: null, authenticated: true}
        }
        case UNAUTH_USER: {
            return {...state, authenticated: false}
        }
        case AUTH_ERROR: {
            console.log('error reducer');
            return {...state, error: action.payload }
        }
    }
    return state;
}