import { combineReducers } from 'redux'

import * as LoginReducer from './reducer/login'
import * as LifecycleReducer from './reducer/lifecycle'
import * as InitialisationReducer from './reducer/initialisation'
import * as OrderReducer from './reducer/order'

export interface State {
  login: LoginReducer.State,
  lifecycle: LifecycleReducer.Lifecycle,
  initialisation: InitialisationReducer.State,
  order: OrderReducer.State
}

const reducer = combineReducers({
  login: LoginReducer.reducer,
  lifecycle: LifecycleReducer.reducer,
  initialisation: InitialisationReducer.reducer,
  order: OrderReducer.reducer
})

export default reducer
