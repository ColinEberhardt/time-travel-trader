import validate from './order-validation'
import merge from './merge'
import getBidAsk from './get-bid-ask'

export enum Side {
  Base,
  Quote
}

export enum OrderType {
  Stop,
  Limit,
  Market
}

export const CHANGE_CURRENCY = 'order/CHANGE_CURRENCY'
export const CHANGE_AMOUNT = 'order/CHANGE_AMOUNT'
export const CHANGE_ORDER_TYPE = 'order/CHANGE_ORDER_TYPE'
export const AMOUNT_BLURRED = 'order/AMOUNT_BLURRED'

interface Action {
  type: string
  amount?: string
  orderType?: OrderType
  currency?: string
  side?: Side
}

interface ActionCreator extends Function {
  (...args: any[]): Action
}

export interface State {
  baseCurrency: string
  quoteCurrency: string
  amount: number
  amountFormatted: string
  bidAsk: string[],
  orderType: OrderType,
  errors: string[]
}

interface Reducer extends Function {
  (state: State, action: Action): State
}

export const changeAmount: ActionCreator = amount => ({
  type: CHANGE_AMOUNT,
  amount
})

export const changeOrderType: ActionCreator = orderType => ({
  type: CHANGE_ORDER_TYPE,
  orderType
})

export const changeCurrency: ActionCreator = (currency, side) => ({
  type: CHANGE_CURRENCY,
  currency,
  side
})

export const amountBlurred: ActionCreator = () => ({
  type: AMOUNT_BLURRED
})

const parseAmount = (amount: string) =>
  Number.parseFloat(amount.replace(/,/g, ''))

const formatAmount = (amount: string) =>
  parseAmount(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const createOrder = (cross: string): State => {
  const baseCurrency = cross.substr(0, 3);
  const quoteCurrency = cross.substr(3);
  const bidAsk = getBidAsk(baseCurrency, quoteCurrency);
  return bidAsk ? {
    baseCurrency,
    quoteCurrency,
    bidAsk,
    amount: 1000,
    amountFormatted: formatAmount('1000'),
    orderType: OrderType.Market,
    errors: []
  } : undefined
}

const propertyForSide = (side: Side) =>
  side === Side.Base ? 'baseCurrency' : 'quoteCurrency'

export const reducer: Reducer = (state = createOrder('GBPEUR'), action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      state = merge(state, { [propertyForSide(action.side)]:  action.currency })
      state = merge(state, { bidAsk: getBidAsk(state.baseCurrency, state.quoteCurrency )})
      break
    case CHANGE_AMOUNT:
      state = merge(state, { amountFormatted: action.amount })
      break
    case CHANGE_ORDER_TYPE:
      state = merge(state, { orderType: action.orderType })
      break
    case AMOUNT_BLURRED:
      state = merge(state, {
        amount: parseAmount(state.amountFormatted),
        amountFormatted: formatAmount(state.amountFormatted)
      })
      break
  }
  if (action.type !== CHANGE_AMOUNT) {
    state = merge(state, { errors: validate(state) })
  }
  return state
}
