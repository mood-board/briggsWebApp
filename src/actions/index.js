import {LOGGED_IN, LOGIN_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from './actionTypes'

export const loggedIn = () => {
    return {
        type: LOGGED_IN,
        isLoggedIn: true
    }
}

export const loginFailure = () => {
    return {
        type: LOGIN_FAILED,
        isLoggedIn: false
    }
}

export function register(user) { return { type: REGISTER_REQUEST, user } }

export function registerSuccess(user) { return { type: REGISTER_SUCCESS, user } }

export function registerFailure(error) { return { type: REGISTER_FAILURE, error } }
