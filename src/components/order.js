import React from 'react'
import { connect } from 'react-redux'

import Errors from './errors'
import CurrencySelector from './currency-selector'
import OrderTypeSelector from './order-type-selector'
import * as order from '../store/reducers/order'

function mapStateToProps(state) {
  return { order: state.order }
}

function mapDispatchToProps(dispatch) {
  return {
    amountUpdated(event) {
      // const amount = Number.parseFloat(event.target.value)
      // if (amount) {
      dispatch(order.changeAmount(event.target.value))
      // }
    },
    currencyChanged(currency, side) {
      dispatch(order.changeCurrency(currency, side))
    },
    orderTypeChanged(orderType) {
      dispatch(order.changeOrderType(orderType))
    },
    amountBlurred() {
      dispatch(order.amountBlurred())
    }
  }
}

const FormGroup = props =>
  <div className='form-group'>
    <label className='col-sm-3 control-label'>{props.title}</label>
    <div className='col-sm-9'>
      {props.children}
    </div>
  </div>

const Order = props =>
  <div>
    <h2>Fx Order Ticket</h2>
    <form className='form-horizontal'>
      <div className='row jumbotron'>
        <h1 className='col-sm-6'>{props.order.bidAsk[0]}</h1>
        <h1 className='col-sm-6'>{props.order.bidAsk[1]}</h1>
        <p className='col-sm-6'>bid</p>
        <p className='col-sm-6'>ask</p>
      </div>
      <FormGroup title='Currency'>
        <div className='row'>
          <div className='col-sm-6'>
            <CurrencySelector selected={props.order.baseCurrency}
              changed={currency => props.currencyChanged(currency, order.SIDE.BASE)} />
          </div>
          <div className='col-sm-6'>
            <CurrencySelector selected={props.order.quoteCurrency}
              changed={currency => props.currencyChanged(currency, order.SIDE.QUOTE)} />
          </div>
        </div>
      </FormGroup>
      <FormGroup title='Order Type'>
        <OrderTypeSelector selected={props.order.orderType}
          changed={props.orderTypeChanged} />
      </FormGroup>
      <FormGroup title='Amount'>
        <input className='form-control' value={props.order.amount}
          onChange={props.amountUpdated} onBlur={props.amountBlurred} />
      </FormGroup>
    </form>
    {props.order.errors.length ? <Errors errors={props.order.errors}/> : ''}
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(Order)
