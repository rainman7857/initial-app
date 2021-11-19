import { combineReducers } from 'redux'

import appFlow from './reducers/appFlowReducer'
import user from './reducers/userReducer'

const rootReducer = combineReducers({
  appFlow,
  user
})

export default rootReducer
