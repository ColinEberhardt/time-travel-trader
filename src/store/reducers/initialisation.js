import merge from './merge'

const INITIALIZATION_PROGRESS_UPDATE = 'initialisation/INITIALIZATION_PROGRESS_UPDATE'

export const progressUpdate = (progress, message) => ({
  type: INITIALIZATION_PROGRESS_UPDATE,
  progress,
  message
})

const INITIAL_STATE = {
  progress: 0,
  message: ''
}

const initialisation = (state = { progress: 0 }, action) => {

  switch (action.type) {
    case INITIALIZATION_PROGRESS_UPDATE:
      return merge(state, {
        progress: action.progress,
        message: action.message
      })
  }
  return state
}

export default initialisation
