import validate from './orderValidation'

export const SIDE = {
  BASE: 'base',
  QUOTE: 'quote'
}

export const CHANGE_CURRENCY = 'order/CHANGE_CURRENCY'
export const CHANGE_AMOUNT = 'order/CHANGE_AMOUNT'

export const changeAmount = amount => ({
  type: CHANGE_AMOUNT,
  amount
})

export const changeCurrency = (currency, side) => ({
  type: CHANGE_CURRENCY,
  currency,
  side
})

const order = (state =  {
  baseCurrency: 'EUR',
  quoteCurrency: 'GBP',
  amount: 1000
}, action) => {

  switch (action.type) {
    case CHANGE_CURRENCY:
      state = Object.assign({}, state, { [`${action.side}Currency`]:  action.currency })
      break
    case CHANGE_AMOUNT:
      state = Object.assign({}, state, { amount: action.amount })
      break
  }
  state = Object.assign({}, state, { errors: validate(state) })
  return state
}

export default order
