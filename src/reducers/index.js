import {combineReducers} from 'redux'

const users = (state = { users: {}}, action)  => {
    return state
}

const rootReducer = combineReducers({
    users
})

export default rootReducer