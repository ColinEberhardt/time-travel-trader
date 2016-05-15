import { State } from './order'

const amountTooSmall = (state: State) =>
  state.amount < 5 ? 'The amount is too small' : ''

const amountTooLarge = (state: State) =>
  state.amount > 5000 ? 'The amount is too big' : ''

const invalidCross = (state: State) =>
  state.baseCurrency === state.quoteCurrency ? 'The base and quote currency cannot be the same' : ''

const validators = [amountTooLarge, invalidCross, amountTooSmall]

const validate = (state: State) =>
  validators.map(d => d(state))
            .filter(d => d !== '')

export default validate
