import api from "../modules/login"
import {loggedIn, loginFailure } from "./index"


export function login (form) {
    return dispatch => api.Login(form)
      .then(() => dispatch(loggedIn()))
      .catch(() => dispatch(loginFailure()))
}