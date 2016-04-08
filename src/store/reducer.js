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
    case 'UPDATE_AMOUNT':
      state.amount = action.amount
      state.errors = validate(state)
      return state
    default:
      return state
  }
}

export default reducer
