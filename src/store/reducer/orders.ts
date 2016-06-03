
import * as OrderReducer from './order'

export type State = OrderReducer.State[]

interface Action {
  type: string
  index?: number
  cross?: string
}

interface Reducer extends Function {
  (state: State, action: Action): State
}

interface ActionCreator extends Function {
  (...args: any[]): Action
}

export const CLOSE_TICKET = 'orders/CLOSE_TICKET'
export const ADD_TICKET = 'orders/ADD_TICKET'

export const closeTicket: ActionCreator = (index: number) => ({
  type: CLOSE_TICKET,
  index
})

export const addTicket: ActionCreator = (cross: string) => ({
  type: ADD_TICKET,
  cross
})

const INITIAL_STATE: State = [
  OrderReducer.createOrder('EURGBP'),
  OrderReducer.createOrder('EURUSD')
]

export const bindIndexToActionCreator = (actionCreator: any, index: number) =>
  (...args: any[]) =>
    Object.assign(actionCreator(...args), { index })

const orderReducer = OrderReducer.reducer

export const reducer: Reducer = (state = INITIAL_STATE, action) => {
  if (action.type.startsWith('order/')) {
    state = [
      ...state.slice(0, action.index),
      orderReducer(state[action.index], action),
      ...state.slice(action.index + 1)
    ]
  }
  switch (action.type) {
    case CLOSE_TICKET:
      state = [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
      break
    case ADD_TICKET:
      const order = OrderReducer.createOrder(action.cross);
      if (order) {
        state = [
          order,
          ...state
        ]
      }
      break
  }
  return state
}
