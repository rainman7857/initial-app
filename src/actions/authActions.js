import * as actionTypes from '../constants/actionTypes'
import { API } from '../api'

export function login(props) {
  return async function(dispatch) {
    try {
      dispatch({ type: actionTypes.LOGIN })
      const response = await API.Authentication.Login(props)
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: response
      })
      return Promise.resolve(response)
    } catch (error) {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        payload: error
      })
      return Promise.reject(error)
    }
  }
}
