
import axios from 'axios'
import { browserHistory } from 'react-router'
import {
    AUTH_USER,
    AUTH_ERROR
} from "./types";

const API_URL = 'http://localhost:3090';

export function signinUser({email, password}) {

    console.log(`email ${email}, password ${password}`);

    return function(dispatch) {

        // Submit email/password to the server

        let signInPath = `${API_URL}/signin`;
        console.log(`singInPath ${signInPath}`);
        axios.post(signInPath, {email, password})
            .then( (response) => {
                console.log('success signin request');
                dispatch({type: AUTH_USER});
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/feature')
            })
            .catch(()=>{
                console.log('fail signin request');
                dispatch(authError('Bad login info'));
            })
        // If request is good...
        // - Update state to indicate user is authenticated
        // - Save the JWT token
        // - Redirect to the route '/feature'

        // If request is bad...
        // - show an error to the user

    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}