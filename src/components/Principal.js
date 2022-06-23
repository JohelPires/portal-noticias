import React from 'react'

function Principal({ noticias }) {
  return (
    <div className='principal'>
      notícias principais:
      <div className='headline'>
        <h1>{noticias.articles[0].title}</h1>
        <p>{noticias.articles[0].description}</p>
      </div>
    </div>
  )
}

export default Principal
