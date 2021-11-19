import * as actionTypes from '../constants/actionTypes'

const _initialState = {

}

export default function reducer(state = _initialState, { payload, type }) {
  switch (type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
