import initialState from './initialState'
import { STORE_USER } from '../actions/actionTypes';

const user = (state = initialState.user, action) => {
    switch(action.type) {
        case STORE_USER:
            console.dir(action.user)
            return Object.assign({}, state, { user: action.user})
        default:
            return state
    }
}

export default user