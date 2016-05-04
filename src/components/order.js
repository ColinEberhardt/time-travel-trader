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

const PRICE_CONTAINER_STYLE = {
  textAlign: 'center'
}

const PRICE_STYLE = {
  fontWeight: 'bold',
  fontSize: 30
}

const Price = props =>
  <div className='panel panel-default'>
    <div className='panel-body' style={PRICE_CONTAINER_STYLE}>
      <div style={PRICE_STYLE}>{props.price}</div>
      <div>{props.side}</div>
    </div>
  </div>

const Order = props =>
  <div className='panel panel-info'>
    <div className='panel-heading'>FX Order Ticket</div>
    <form className='form-horizontal panel-body'>
      <div className='row'>
        <div className='col-sm-6'>
          <Price price={props.order.bidAsk[0]} side='Bid'/>
        </div>
        <div className='col-sm-6'>
          <Price price={props.order.bidAsk[1]} side='Ask'/>
        </div>
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
      {props.order.errors.length ? <Errors errors={props.order.errors}/> : ''}
      <div>
        <div className='col-sm-6'><button type='button' className='btn btn-primary btn-danger btn-lg btn-block'>SELL</button></div>
        <div className='col-sm-6'><button type='button' className='btn btn-primary btn-success btn-lg btn-block'>BUY</button></div>
      </div>
    </form>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(Order)
