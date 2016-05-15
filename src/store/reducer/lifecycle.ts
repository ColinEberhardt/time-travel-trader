export enum Lifecycle {
  Login,
  OrderEntry,
  Initialising
}

export interface Action {
  type: string
  state: Lifecycle
}

interface Reducer extends Function {
  (state: Lifecycle, action: Action): Lifecycle
}

export const LIFECYCLE_TRANSITION = 'lifecycle/LIFECYCLE_TRANSITION'

export const transition = (state: Lifecycle): Action => {
  return {
    type: LIFECYCLE_TRANSITION,
    state
  }
}


export const reducer: Reducer  = (state = Lifecycle.Login, action: Action) => {
  switch (action.type) {
    case LIFECYCLE_TRANSITION:
      return action.state
  }
  return state
}
