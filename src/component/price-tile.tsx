/* tslint:disable */
import * as React from 'react'
/* tslint:enable */

import * as Radium from 'radium'

interface Properties {
  price: string
  side: string
}

const Style = {
  priceTile: {
    textAlign: 'center',
    flex: 1,
    width: 145,
    height: 150,
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'column',
    alignItems: 'center',
    ':hover': {
      backgroundColor: '#233d51'
    },
  },
  price: {
    fontSize: 20
  },
  directionIndicator: {
    position: 'relative',
    left: '-10px',
    width: 16,
    height: 16
  },
  trailingPrice: {
    fontSize: 20,
    position: 'relative',
    left: 2,
    top: '-25px'
  },
  pips: {
    fontSize: 85,
    lineHeight: '80px'
  },
  side: {
    fontSize: 22
  }
}

const downPath = <path d='M0 0 h 16 l -8 16 z' fill='#ff5460'/>

const upPath = <path d='M0 16 h 16 l -8 -16 z' fill='#41dc65'/>

const leadingPrice = (price: string) =>
  price.substr(0, price.length - 3)

const trailingPrice = (price: string) =>
  price.substr(-1)

const pipsPrice = (price: string) =>
  price.substr(price.length - 3, 2)

const PriceTile = (props: Properties) =>
  <div style={Style.priceTile}>
    <div style={Style.price}>{leadingPrice(props.price)}</div>
    <div>
      <span style={Style.pips}>{pipsPrice(props.price)}</span>
      <span style={Style.trailingPrice}>{trailingPrice(props.price)}</span>
      <svg style={Style.directionIndicator}>
        {(Number(props.price) * 1000)  % 2 === 0 ? upPath : downPath}
      </svg>
    </div>
    <div style={Style.side}>{props.side}</div>
  </div>

export default Radium(PriceTile)
