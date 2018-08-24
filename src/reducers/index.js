import {combineReducers} from 'redux'
import authentication from "./authentication"
import registration from "./registration"
import user from './user'


const rootReducer = combineReducers({
    registration,
    authentication,
    user
})

export default rootReducer