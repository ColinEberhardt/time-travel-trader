import merge from './merge'

const INITIALIZATION_PROGRESS_UPDATE = 'initialisation/INITIALIZATION_PROGRESS_UPDATE'

export const progressUpdate = progress => ({
  type: INITIALIZATION_PROGRESS_UPDATE,
  progress
})

const initialisation = (state = { progress: 0 }, action) => {

  switch (action.type) {
    case INITIALIZATION_PROGRESS_UPDATE:
      return merge(state, { progress: action.progress })
  }
  return state
}

export default initialisation
