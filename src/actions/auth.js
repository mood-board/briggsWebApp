import api from "../modules/api"
import {loggedIn, loginFailure, registerSuccess, registerFailure } from "./index"
import history from '../history'
import {storeUser} from './user'


export function login (form) {
    return dispatch => api.Login(form)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user_id", response.data.user.user_id)
        dispatch(storeUser(response.data.user))
      })
      .then(() => dispatch(loggedIn()))
      .then(() => history.push("/")) //Redirect to homepage
      .catch(() => dispatch(loginFailure()))
}



export function register(credentials) {
  return dispatch => api.Register(credentials)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      dispatch(storeUser(response.data.user))
    })
    .then(() => dispatch(registerSuccess()))
    .catch(() => dispatch(registerFailure()))
}