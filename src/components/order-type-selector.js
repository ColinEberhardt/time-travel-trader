import React from 'react'

import isSelected from './is-selected'
import {ORDER_TYPE} from '../store/reducers/order'

const OrderTypeSelector = (props) =>
  <select className='form-control'
        onChange={(evt) => props.changed(evt.target.selectedOptions[0].value)}>
    {Object.keys(ORDER_TYPE).map(orderType =>
      <option key={orderType} {...isSelected(ORDER_TYPE[orderType], props.selected)}>{ORDER_TYPE[orderType]}</option>
    )}
  </select>

export default OrderTypeSelector
