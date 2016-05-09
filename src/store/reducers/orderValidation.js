// const amountTooSmall = state =>
//   state.amount < 5 ? 'The amount is too small' : ''

const amountTooLarge = state => {
  console.log(state)
  return Number.parseFloat(state.amount) > 5000 ? 'The amount is too big' : ''
}

const invalidCross = state =>
  state.baseCurrency === state.quoteCurrency ? 'The base and quote currency cannot be the same' : ''

const validators = [amountTooLarge, invalidCross]

const validate = state =>
  validators.map(d => d(state))
            .filter(d => d !== '')

export default validate
