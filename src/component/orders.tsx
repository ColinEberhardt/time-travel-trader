/* tslint:disable */
import * as React from 'react'
/* tslint:enable */
import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'
import { Dispatch } from 'redux'

import { bindIndexToActionCreator, State, closeTicket, addTicket } from './../store/reducer/orders'
import { changeAmount, changeCurrency, changeOrderType, Side, OrderType, amountBlurred } from './../store/reducer/order'
import * as Reducer from './../store/reducer'
import { Order, DispatchProperties as OrderDispatchProperties } from './order'


interface StateProperties {
  orders: State
}

interface DispatchProperties {
  addTicket: Function
}

interface ReduxProperties {
  dispatch: Dispatch
}

type Properties = StateProperties & DispatchProperties & ReduxProperties

const mapStateToProps: MapStateToProps<StateProperties, {}> = (state: Reducer.State) => {
  return {
    orders: state.orders
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProperties, {}> = (dispatch: Dispatch) => {
  return {
    addTicket(event: KeyboardEvent) {
      if (event.charCode === 13) {
        const target = event.target as HTMLInputElement
        const fxCross = target.value
        dispatch(addTicket(fxCross))
        target.value = ''
      }
    },
    dispatch
  }
}

const orderDispatchProperties =
  (index: number): MapDispatchToPropsFunction<OrderDispatchProperties, {}> =>
    (dispatch: Dispatch) => {
      return {
        amountUpdated(event: KeyboardEvent) {
          const target = event.target as HTMLInputElement
          dispatch(bindIndexToActionCreator(changeAmount, index)(target.value))
        },
        currencyChanged(currency: string, side: Side) {
          dispatch(bindIndexToActionCreator(changeCurrency, index)(currency, side))
        },
        orderTypeChanged(orderType: OrderType) {
          dispatch(bindIndexToActionCreator(changeOrderType, index)(orderType))
        },
        amountBlurred() {
          dispatch(bindIndexToActionCreator(amountBlurred, index)())
        },
        close() {
          dispatch(closeTicket(index))
        }
      }
    }

const Orders = (props: Properties) =>
  <div>
    <div>
      <input onKeyPress={props.addTicket}></input>
    </div>
    <div>
      { props.orders.map((order, index) => <Order order={order}
          {...orderDispatchProperties(index)(props.dispatch)} />) }
    </div>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
