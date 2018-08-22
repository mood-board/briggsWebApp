import initialState from "./initialState"
import {LOGGED_IN, LOGIN_FAILED} from '../actions/actionTypes'


const authentication = (state = initialState, action) => {
    switch (action.type){
      case LOGGED_IN:
        return Object.assign({}, state, { isLoggedIn: true, shouldRedirect: true })
      case LOGIN_FAILED:
        return Object.assign({}, state, { isLoggedIn: false, shouldRedirect: false, errorMessage: action.error.message })
    }
    return state
  }


export default authentication