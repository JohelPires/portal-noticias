import React, { useState } from 'react'

function Destaques({ noticias, setUrl }) {
  // console.log(noticias)

  // const [fontes, setFontes] = useState([])

  function handleClick(item) {
    const novaUrl = `https://newsapi.org/v2/top-headlines?pageSize=25&sources=${item}&apiKey=c0b36feefa3d4496af378b1abd24f58c`
    setUrl(novaUrl)
  }

  function resetSources() {
    setUrl(
      'https://newsapi.org/v2/top-headlines?country=br&pageSize=25&apiKey=c0b36feefa3d4496af378b1abd24f58c'
    )
  }

  const fontesList = []

  noticias.articles.map((item) => {
    // console.log(item.source.name)
    if (!fontesList.includes(item.source.name))
      fontesList.push(item.source.name)
  })

  // console.log(fontes)
  const fontes = fontesList.map((item, idx) => {
    return (
      <div
        key={idx}
        className='itens-do-menu-lateral link'
        onClick={() => handleClick(item)}
      >
        <h5>{item}</h5>
      </div>
    )
  })

  return (
    <div className='destaques'>
      <h2>Fonte</h2>
      {fontes}
      <div onClick={resetSources} className='itens-do-menu-lateral link'>
        <h5>todas</h5>
      </div>
    </div>
  )
}

export default Destaques
