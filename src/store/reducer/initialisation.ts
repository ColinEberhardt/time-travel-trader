import merge from './merge'

const INITIALIZATION_PROGRESS_UPDATE = 'initialisation/INITIALIZATION_PROGRESS_UPDATE'

export interface State {
  progress: number
  message: string
}

interface Action {
  type: string
  progress: number
  message: string
}

interface ActionCreator extends Function {
  (...args: any[]): Action
}

interface Reducer extends Function {
  (state: State, action: Action): State
}

export const progressUpdate: ActionCreator = (progress: number, message: string): Action => ({
  type: INITIALIZATION_PROGRESS_UPDATE,
  progress,
  message
})

const INITIAL_STATE: State = {
  progress: 0,
  message: ''
}

export const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIALIZATION_PROGRESS_UPDATE:
      return merge(state, {
        progress: action.progress,
        message: action.message
      })
  }
  return state
}
