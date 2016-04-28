import validate from './orderValidation'

const order = (previousState =  {
  baseCurrency: 'EUR',
  quoteCurrency: 'GBP',
  amount: 1000,
  error: ''
}, action) => {
  // a dirty clone
  var state = JSON.parse(JSON.stringify(previousState))

  switch (action.type) {
    case 'CHANGE_CURRENCY':
      state[`${action.side}Currency`] = action.currency
      return state
    case 'UPDATE_AMOUNT':
      state.amount = action.amount
      state.errors = validate(state)
      return state
    default:
      return state
  }
}

export default order
