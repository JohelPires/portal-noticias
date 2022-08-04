import React, { useState } from 'react'
import { useEffect } from 'react'

function Destaques({ noticias, setUrl }) {
  // console.log(noticias)

  // const [fontes, setFontes] = useState([])

  function handleClick(item) {
    const novaUrl = `https://newsapi.org/v2/top-headlines?pageSize=25&sources=${item}&apiKey=c0b36feefa3d4496af378b1abd24f58c`
    console.log(item, novaUrl, noticias)
    setUrl(novaUrl)
  }

  function resetSources() {
    setUrl(
      'https://newsapi.org/v2/top-headlines?country=br&pageSize=25&apiKey=c0b36feefa3d4496af378b1abd24f58c'
    )
  }
  const [freeNews, setFreeNews] = useState({})
  const [url2, setUrl2] = useState(
    'https://free-news.p.rapidapi.com/v1/search?q=World&lang=pt'
  )
  const [options, setOptions] = useState({
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '94e947e3damsh8412bd66b754755p1c549fjsn3010d5f0f1c7',
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
    },
  })

  const worldNews = ''

  useEffect(() => {
    fetch(url2, options)
      .then((res) => res.json())
      .then((json) => {
        setFreeNews(json)
        worldNews = freeNews.articles.map((article, idx) => {
          return <h3>{article.title}</h3>
        })
      })
      .catch((err) => console.error('error:' + err))
  }, [url2, options])
  const fontesList = []

  // console.log(freeNews.articles)

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
