const amountToSmall = state =>
  state.amount < 5 ? 'The amount is too SMALL!!!' : ''

const amountToLarge = state =>
  state.amount > 5000 ? 'The amount is too big!!!' : ''

const invalidCross = state =>
  state.baseCurrency === state.quoteCurrency ? 'The base and quote currency cannot be the same' : ''

const validators = [amountToLarge, amountToSmall, invalidCross]

// is there a better way to do this?
const validate = state =>
  validators.map(d => d(state)).filter(d => d !== '')

export default validate
