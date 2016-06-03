import { combineReducers } from 'redux'

import * as LoginReducer from './reducer/login'
import * as LifecycleReducer from './reducer/lifecycle'
import * as InitialisationReducer from './reducer/initialisation'
import * as OrdersReducer from './reducer/orders'

export interface State {
  login: LoginReducer.State,
  lifecycle: LifecycleReducer.State,
  initialisation: InitialisationReducer.State,
  orders: OrdersReducer.State
}

const reducer = combineReducers({
  login: LoginReducer.reducer,
  lifecycle: LifecycleReducer.reducer,
  initialisation: InitialisationReducer.reducer,
  orders: OrdersReducer.reducer
})

export default reducer
