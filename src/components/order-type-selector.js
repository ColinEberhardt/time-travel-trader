import React from 'react'

import {ORDER_TYPE} from '../store/reducers/order'

const OrderTypeSelector = (props) =>
  <select className='form-control' value={props.selected}
        onChange={(evt) => props.changed(evt.target.selectedOptions[0].value)}>
    {Object.keys(ORDER_TYPE).map(orderType =>
      <option key={orderType}>{ORDER_TYPE[orderType]}</option>
    )}
  </select>

export default OrderTypeSelector
