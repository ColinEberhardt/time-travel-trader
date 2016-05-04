import React from 'react'

import isSelected from './is-selected'

const CURRENCIES = [
  'EUR', 'GBP', 'USD', 'CHF', 'JPY', 'AUD', 'CAD'
]

const CurrencySelector = (props) =>
  <select className='form-control'
       onChange={(evt) => props.changed(evt.target.selectedOptions[0].value)}>
    {CURRENCIES.map(currency =>
      <option key={currency} {...isSelected(currency, props.selected)}>{currency}</option>
    )}
  </select>

export default CurrencySelector
