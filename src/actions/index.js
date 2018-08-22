import {LOGGED_IN, LOGIN_FAILED} from './actionTypes'

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