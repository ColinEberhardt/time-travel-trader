// use Object.assign as a mechanism for updating state
const merge = (state, mutations) =>
  Object.assign({}, state, mutations)

export default merge
