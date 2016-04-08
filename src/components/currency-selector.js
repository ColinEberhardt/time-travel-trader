import React from 'react'

const CURRENCIES = [
  'EUR', 'GBP', 'USD', 'CHF'
]

const SELECTED = {
  selected: 'selected'
}

const propertiesForOption = (currency, selectedCurrency) =>
  currency === selectedCurrency ? SELECTED : {}

const CurrencySelector = (props) =>
  <select className='form-control' onChange={(evt) => props.changed(evt.target.selectedOptions[0].value)}>
    {CURRENCIES.map(currency =>
      <option key={currency} {...propertiesForOption(currency, props.selected)}>{currency}</option>
    )}
  </select>

export default CurrencySelector
