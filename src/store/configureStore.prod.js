import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../redux/User';

const configureStore = preloadedState => createStore(
  usersReducer,
  preloadedState,
  applyMiddleware(thunk)
)

export default configureStore