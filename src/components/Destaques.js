import React, { useState } from 'react'

function Destaques({ noticias }) {
  // console.log(noticias)

  // const [fontes, setFontes] = useState([])

  const fontesList = []

  noticias.articles.map((item) => {
    // console.log(item.source.name)
    if (!fontesList.includes(item.source.name))
      fontesList.push(item.source.name)
  })
  console.log(fontesList)

  // console.log(fontes)
  const fontes = fontesList.map((item, idx) => {
    return (
      <div key={idx} className='itens-do-menu-lateral link'>
        <h5>{item}</h5>
      </div>
    )
  })

  return (
    <div className='destaques'>
      <h2>Fonte</h2>
      {fontes}
    </div>
  )
}

export default Destaques
