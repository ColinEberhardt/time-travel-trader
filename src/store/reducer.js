import { combineReducers } from 'redux'

import lifecycle from './reducers/lifecycle'
import initialisation from './reducers/initialisation'
import order from './reducers/order'
import login from './reducers/login'

const reducer = combineReducers({
  lifecycle,
  initialisation,
  order,
  login
})

export default reducer
