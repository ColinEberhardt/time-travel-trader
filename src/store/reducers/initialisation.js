const initialisation = (previousState = { progress: 0 }, action) => {
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

export default initialisation
