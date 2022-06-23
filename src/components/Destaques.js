import React from 'react'

function Destaques({ noticiasDoMes }) {
  const titulos = noticiasDoMes.items.map((item) => {
    return <h5>{item.titulo}</h5>
  })

  return (
    <div className='destaques'>
      <h2>Últimas notícias</h2>
      {titulos}
    </div>
  )
}

export default Destaques
