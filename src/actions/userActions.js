import * as actionTypes from '../constants/actionTypes'
import { API } from '../api'

export function setUser(payload) {
  return function(dispatch) {
    dispatch({ type: actionTypes.SET_USER, payload })
  }
}
