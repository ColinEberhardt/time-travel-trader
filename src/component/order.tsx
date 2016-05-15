/* tslint:disable */
import * as React from 'react'
/* tslint:enable */
import { Dispatch } from 'redux'
import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'

import Errors from './errors'
import CurrencySelector from './currency-selector'
import FormGroup from './form-group'
// import OrderTypeSelector from './order-type-selector'
import * as OrderReducer from '../store/reducer/order'
import * as Reducer from '../store/reducer'

interface StateProperties {
  order: OrderReducer.State
}

interface DispatchProperties {
  amountUpdated: Function
  currencyChanged: Function
  orderTypeChanged: Function
  amountBlurred: Function
}

type Properties = StateProperties & DispatchProperties


const mapStateToProps: MapStateToProps<StateProperties, {}> = (state: Reducer.State) => {
  return { order: state.order }
}

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProperties, {}> = (dispatch: Dispatch) => {
  return {
    amountUpdated(event: KeyboardEvent) {
      const target = event.target as HTMLInputElement
      dispatch(OrderReducer.changeAmount(target.value))
    },
    currencyChanged(currency: string, side: OrderReducer.Side) {
      dispatch(OrderReducer.changeCurrency(currency, side))
    },
    orderTypeChanged(orderType: OrderReducer.OrderType) {
      dispatch(OrderReducer.changeOrderType(orderType))
    },
    amountBlurred() {
      dispatch(OrderReducer.amountBlurred())
    }
  }
}

const PRICE_CONTAINER_STYLE = {
  textAlign: 'center'
}

const PRICE_STYLE = {
  fontWeight: 'bold',
  fontSize: 30
}

// <Price price={props.order.bidAsk[0]} side='Bid'/>

// <Price price={props.order.bidAsk[0]} side='Bid'/>

// const Price = props =>
//   <div className='panel panel-default'>
//     <div className='panel-body' style={PRICE_CONTAINER_STYLE}>
//       <div style={PRICE_STYLE}>{props.price}</div>
//       <div>{props.side}</div>
//     </div>
//   </div>

const Order = (props: Properties) =>
  <div className='panel panel-info'>
    <div className='panel-heading'>FX Order Ticket</div>
    <div className='form-horizontal panel-body'>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='panel panel-default'>
            <div className='panel-body' style={PRICE_CONTAINER_STYLE}>
              <div style={PRICE_STYLE}>{props.order.bidAsk[0]}</div>
              <div>Bid</div>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='panel panel-default'>
            <div className='panel-body' style={PRICE_CONTAINER_STYLE}>
              <div style={PRICE_STYLE}>{props.order.bidAsk[1]}</div>
              <div>Ask</div>
            </div>
          </div>
        </div>
      </div>
      <FormGroup title='Currency'>
        <div className='row'>
          <div className='col-sm-6'>
            <CurrencySelector selected={props.order.baseCurrency}
              changed={(currency: string) => props.currencyChanged(currency, OrderReducer.Side.Base)} />
          </div>
          <div className='col-sm-6'>
            <CurrencySelector selected={props.order.quoteCurrency}
              changed={(currency: string) => props.currencyChanged(currency, OrderReducer.Side.Quote)} />
          </div>
        </div>
      </FormGroup>
      <FormGroup title='Amount'>
        <input className='form-control' value={props.order.amountFormatted}
          onChange={props.amountUpdated} onBlur={props.amountBlurred} />
      </FormGroup>
      {props.order.errors.length ? <Errors errors={props.order.errors}/> : ''}
      <div>
        <div className='col-sm-6'><button type='button' className='btn btn-primary btn-danger btn-lg btn-block'>SELL</button></div>
        <div className='col-sm-6'><button type='button' className='btn btn-primary btn-success btn-lg btn-block'>BUY</button></div>
      </div>
    </div>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(Order)
