import coinTicker from 'coin-ticker-binance'
import React from 'react'
import { Link } from 'react-router-dom'

function Header({ hojeStr }) {
  // console.clear()

  // console.log(coinTicker())

  // coinTicker('binance', 'pairs').then((pairs) => {
  //   console.log(pairs)
  // })

  // coinTicker('coinbase', 'BTC_USD').then((tick) => {
  //   console.log(tick)
  // })
  // =>
  // {
  //   last: '1034.8',
  //   ask: '1034.8',
  //   bid: '1034.7',
  //   low: '1001.6',
  //   high: '1040.0',
  //   vol: '15112.8733725',
  //   timestamp: '1486238356.227418953',
  //   exchange: 'bitfinex',
  //   pair: 'BTC_USD',
  //   rawData: { ... }
  // }

  return (
    <header className='header'>
      <Link to='/'>
        <h1>Portal Notícias</h1>
      </Link>
      <p className='subtitle'>Algumas frases de impacto aqui scrollando</p>
      <p>{hojeStr}</p>
    </header>
  )
}

export default Header
