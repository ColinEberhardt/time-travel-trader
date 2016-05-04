// rates obtained from http://webrates.truefx.com/rates/connect.html?f=html
const RATES = {
  'EUR/USD': 1.14,
  'USD/JPY': 106.884,
  'GBP/USD': 1.44,
  'EUR/GBP': 0.79,
  'USD/CHF': 0.95,
  'EUR/JPY': 122.814,
  'EUR/CHF': 1.09,
  'USD/CAD': 1.27,
  'AUD/USD': 0.74,
  'GBP/JPY': 154.820
}

const getRate = (ccyOne, ccyTwo) => {
  const key = ccyOne + '/' + ccyTwo
  if (RATES[key]) {
    return RATES[key]
  }
  const inverseKey = ccyTwo + '/' + ccyOne
  if (RATES[inverseKey]) {
    return 1 / RATES[inverseKey]
  }
  return NaN
}

const getBidAsk = (ccyOne, ccyTwo) => {
  const rate = getRate(ccyOne, ccyTwo)
  const spread = rate * 0.02
  return [(rate - spread).toFixed(3), (rate + spread).toFixed(3)]
}

export default getBidAsk
