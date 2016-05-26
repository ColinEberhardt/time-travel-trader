export enum State {
  Login,
  OrderEntry,
  Initialising
}

export interface Action {
  type: string
  state: State
}

interface Reducer extends Function {
  (state: State, action: Action): State
}

export const LIFECYCLE_TRANSITION = 'lifecycle/LIFECYCLE_TRANSITION'

export const transition = (state: State): Action => {
  return {
    type: LIFECYCLE_TRANSITION,
    state
  }
}


export const reducer: Reducer  = (state = State.Login, action: Action) => {
  switch (action.type) {
    case LIFECYCLE_TRANSITION:
      return action.state
  }
  return state
}
