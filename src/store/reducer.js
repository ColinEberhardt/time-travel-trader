import validate from './validate'

const reducer = (previousState, action) => {
  // a dirty clone
  var state = JSON.parse(JSON.stringify(previousState))

  switch (action.type) {
    case 'LIFECYCLE_TRANSITION':
      state.lifecycle = action.lifecycle
      return state
    case 'INITIALIZATION_PROGRESS_UPDATE':
      state.initialisation.progress = action.progress
      return state
    case 'CHANGE_CURRENCY':
      state.order[`${action.side}Currency`] = action.currency
      return state
    case 'UPDATE_AMOUNT':
      state.order.amount = action.amount
      state.order.errors = validate(state)
      return state
    default:
      return state
  }
}

export default reducer
