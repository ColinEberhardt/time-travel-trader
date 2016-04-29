export const STATE = {
  LOGIN: 'LOGIN',
  ORDER_ENTRY: 'ORDER_ENTRY',
  INITIALISING: 'INITIALISING'
}

export const LIFECYCLE_TRANSITION = 'lifecycle/LIFECYCLE_TRANSITION'

export const transition = lifecycle => {
  if (!Object.keys(STATE).includes(lifecycle)) {
    console.error('Invalid lifecycle state', lifecycle)
  }
  return {
    type: LIFECYCLE_TRANSITION,
    lifecycle
  }
}


const lifecycle = (state = STATE.LOGIN, action) => {

  switch (action.type) {
    case LIFECYCLE_TRANSITION:
      return action.lifecycle
  }

  return state
}

export default lifecycle
