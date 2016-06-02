import { State } from './order'

const amountTooSmall = (state: State) =>
  state.amount < 5 ? 'The amount is too small' : ''

const amountTooLarge = (state: State) =>
  state.amount > 5000 ? 'The amount is too big' : ''

const validators = [amountTooLarge, amountTooSmall]

const validate = (state: State) =>
  validators.map(d => d(state))
            .filter(d => d !== '')

export default validate
