const lifecycle = (previousState = 'LOGIN', action) => {
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

export default lifecycle
