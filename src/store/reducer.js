import validate from './validate'
import { combineReducers } from 'redux'

const initialisationReducer = (previousState = { progress: 0 }, action) => {
  // a dirty clone
  var state = JSON.parse(JSON.stringify(previousState))

  switch (action.type) {
    case 'INITIALIZATION_PROGRESS_UPDATE':
      state.progress = action.progress
      return state
    default:
      return state
  }
}

const lifecycleReducer = (previousState = 'LOGIN', action) => {
  // a dirty clone
  var state = JSON.parse(JSON.stringify(previousState))

  switch (action.type) {
    case 'LIFECYCLE_TRANSITION':
      state = action.lifecycle
      return state
    default:
      return state
  }
}

const loginReducer =  (state = {
  username: 'username',
  password: 'p@ssw0rd'
}, action) => state

const orderReducer = (previousState =  {
  baseCurrency: 'EUR',
  quoteCurrency: 'GBP',
  amount: 1000,
  error: ''
}, action) => {
  // a dirty clone
  var state = JSON.parse(JSON.stringify(previousState))

  switch (action.type) {
    case 'CHANGE_CURRENCY':
      state[`${action.side}Currency`] = action.currency
      return state
    case 'UPDATE_AMOUNT':
      state.amount = action.amount
      state.errors = validate(state)
      return state
    default:
      return state
  }
}

const reducer = combineReducers({
  'lifecycle': lifecycleReducer,
  'initialisation': initialisationReducer,
  'order': orderReducer,
  'login': loginReducer
})

export default reducer
