import React from 'react'

function Destaques({ noticias }) {
  const titulos = noticias.articles.map((item, idx) => {
    return (
      <div key={idx} className='itens-do-menu-lateral link'>
        <h5>{item.source.name}</h5>
      </div>
    )
  })

  return (
    <div className='destaques'>
      <h2>Fonte</h2>
      {titulos}
    </div>
  )
}

export default Destaques
