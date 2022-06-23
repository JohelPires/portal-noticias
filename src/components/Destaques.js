import React from 'react'

function Destaques({ noticias }) {
  const titulos = noticias.articles.map((item) => {
    return <h5>{item.title}</h5>
    console.log(item)
  })

  return (
    <div className='destaques'>
      <h2>Destaques</h2>
      {titulos}
    </div>
  )
}

export default Destaques
