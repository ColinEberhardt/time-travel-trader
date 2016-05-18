/* tslint:disable */
import * as React from 'react'
/* tslint:enable */

interface PriceTileProperties {
  price: string
  side: string
}

const Style = {
  priceTile: {
    textAlign: 'center',
    flex: 1,
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  price: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#5a5b61'
  },
  pips: {
    fontSize: 50
  },
  tradeButton: {
    width: 40,
    backgroundColor: '#131f37',
    border: '1px solid #86e2fb',
    borderRadius: 5,
    color: 'white'
  }
}

const leadingPrice = (price: string) =>
  price.substr(0, price.length - 3)

const trailingPrice = (price: string) =>
  price.substr(-1)

const pipsPrice = (price: string) =>
  price.substr(price.length - 3, 2)

const PriceTile = (props: PriceTileProperties) =>
  <div style={Style.priceTile}>
    <div>
      <span style={Style.price}>{leadingPrice(props.price)}</span>
      <span style={Style.pips}>{pipsPrice(props.price)}</span>
      <span style={Style.price}>{trailingPrice(props.price)}</span>
    </div>
    <button type='button' style={Style.tradeButton}>{props.side}</button>
  </div>

export default PriceTile
