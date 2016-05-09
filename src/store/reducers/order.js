import validate from './orderValidation'
import merge from './merge'
import getBidAsk from './getBidAsk'

export const SIDE = {
  BASE: 'base',
  QUOTE: 'quote'
}

export const ORDER_TYPE = {
  STOP: 'Stop',
  LIMIT: 'Limit',
  MARKET: 'Market'
}

export const CHANGE_CURRENCY = 'order/CHANGE_CURRENCY'
export const CHANGE_AMOUNT = 'order/CHANGE_AMOUNT'
export const CHANGE_ORDER_TYPE = 'order/CHANGE_ORDER_TYPE'
export const AMOUNT_BLURRED = 'order/AMOUNT_BLURRED'

export const changeAmount = amount => ({
  type: CHANGE_AMOUNT,
  amount
})

export const changeOrderType = orderType => ({
  type: CHANGE_ORDER_TYPE,
  orderType
})

export const changeCurrency = (currency, side) => ({
  type: CHANGE_CURRENCY,
  currency,
  side
})

export const amountBlurred = () => ({
  type: AMOUNT_BLURRED
})

const parseAmount = number =>
  Number.parseFloat(number.replace(',', ''))

const formatAmount = number =>
  parseAmount(number)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const INITIAL_STATE =  {
  baseCurrency: 'EUR',
  quoteCurrency: 'GBP',
  amount: 1000,
  amountFormatted: formatAmount('1000'),
  bidAsk: getBidAsk('EUR', 'GBP'),
  orderType: ORDER_TYPE.MARKET
}

const order = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      state = merge(state, { [`${action.side}Currency`]:  action.currency })
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

export default order
