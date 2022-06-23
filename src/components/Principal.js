import React from 'react'

function Principal({ noticias }) {
  const restOfNews = noticias.articles.map((item, idx) => {
    if (idx > 0) {
      return (
        <div key={idx} className='outras'>
          <h4>{item.title}</h4>
          <p className='author'>por: {item.author}</p>
          <p>{item.description}</p>
        </div>
      )
    }
  })
  return (
    <div className='principal'>
      {/* notícias principais: */}
      <div className='headline'>
        <h1>{noticias.articles[0].title}</h1>
        <p className='author'>por: {noticias.articles[0].author}</p>
        <p>{noticias.articles[0].description}</p>
      </div>
      <div className='outras-container'>{restOfNews}</div>
    </div>
  )
}

export default Principal
