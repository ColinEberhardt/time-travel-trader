/* tslint:disable */
import * as React from 'react'
/* tslint:enable */

import isSelected from './is-selected'

const CURRENCIES = [
  'EUR', 'GBP', 'USD', 'CHF', 'JPY', 'AUD', 'CAD'
]

interface CurrencySelectorProperties {
  changed: (currency: string) => void
  selected: string
}

const CurrencySelector = (props: CurrencySelectorProperties) =>
  <select className='form-control'
       onChange={(evt: any) => props.changed(evt.target.selectedOptions[0].value)}>
    {CURRENCIES.map(currency =>
      <option key={currency} {...isSelected(currency, props.selected)}>{currency}</option>
    )}
  </select>

export default CurrencySelector
