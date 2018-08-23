import api from "../modules/api"
import {loggedIn, loginFailure, registerSuccess, registerFailure } from "./index"
import history from '../history'


export function login (form) {
    return dispatch => api.Login(form)
      .then((response) => localStorage.setItem("token", response.data.token))
      .then(() => dispatch(loggedIn()))
      .then(() => history.push("/")) //Redirect to homepage
      .catch(() => dispatch(loginFailure()))
}



//TODO: Check certain http code and treat as needed
export function register(credentials) {
  return dispatch => api.Register(credentials)
    .then((response) => localStorage.setItem("token", response.data.token))
    .then(() => dispatch(registerSuccess()))
    .then(() => history.push("/")) //Redirect to homepage
    .catch(() => dispatch(registerFailure()))
}