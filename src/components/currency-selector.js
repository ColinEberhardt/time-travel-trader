import React from 'react'

const CURRENCIES = [
  'EUR', 'GBP', 'USD', 'CHF'
]

const CurrencySelector = (props) =>
  <select className='form-control'
       onChange={(evt) => props.changed(evt.target.selectedOptions[0].value)}
       value={props.selected}>
    {CURRENCIES.map(currency =>
      <option key={currency}>{currency}</option>
    )}
  </select>

export default CurrencySelector
