import api from "../modules/api"
import {loggedIn, loginFailure } from "./index"


export function login (form) {
    return dispatch => api.Login(form)
      .then((response) => localStorage.setItem("token", response.data.token))
      .then(() => dispatch(loggedIn()))
      .catch(() => dispatch(loginFailure()))
}



export function register(credentials) {
  return dispatch => api.Register(credentials)
    .then((response) => console.dir(response))
    .then(() => dispatch(loggedIn()))
    .then(() => dispatch(loginFailure()))
}