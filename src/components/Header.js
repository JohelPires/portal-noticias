import React from 'react'

function Header({ hojeStr }) {
  return (
    <header className='header'>
      <h1>Portal Notícias</h1>
      <p className='subtitle'>Algumas frases de impacto aqui scrollando</p>
      <p>{hojeStr}</p>
    </header>
  )
}

export default Header
