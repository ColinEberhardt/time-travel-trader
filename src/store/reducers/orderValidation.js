const amountToSmall = state =>
  state.amount < 5 ? 'The amount is too SMALL!!!' : ''

const amountToLarge = state =>
  state.amount > 5000 ? 'The amount is too big!!!' : ''

const amountReallyLarge = state =>
  state.amount > 50000 ? 'The amount is WAYYY TOO BIG!!!' : ''

const validators = [amountToLarge, amountToSmall, amountReallyLarge]

// is there a better way to do this?
const validate = state =>
  validators.map(d => d(state)).filter(d => d !== '')

export default validate
