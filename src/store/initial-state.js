
const initialState = {
  lifecycle: 'LOGIN',
  credentials: {
    username: 'username',
    password: 'p@ssw0rd'
  },
  initialisation: {
    progress: 0
  },
  order: {
    baseCurrency: 'EUR',
    quoteCurrency: 'GBP',
    amount: 1000,
    error: ''
  }
}

export default initialState
