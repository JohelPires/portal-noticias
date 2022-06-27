import React from 'react'
import { useNavigate } from 'react-router-dom'

function Principal({ noticias, setArticle }) {
  const restOfNews = noticias.articles.map((item, idx) => {
    if (idx > 0) {
      return (
        <div key={idx} onClick={() => openArticle(item)} className='outras'>
          <div className='head-of-article'>
            {item.urlToImage && (
              <div className='img-small-container'>
                <img
                  className='img-small'
                  src={item.urlToImage}
                  alt={item.title}
                />
              </div>
            )}
            <div>
              <h4>{item.title}</h4>
              <p className='author'>
                por: {item.author ? item.author : 'autor desconhecido'}
              </p>
              <p className='author'>
                {item.publishedAt &&
                  `publicado em: ${item.publishedAt.slice(0, 10)}`}
              </p>
            </div>
          </div>
          <p>{item.description}</p>
          <p className='author'>
            Fonte: <a href={item.url}> {item.source.name}</a>
          </p>
        </div>
      )
    }
  })

  const navigate = useNavigate()

  function openArticle(clickedArticle) {
    // console.log(clickedArticle.url)
    window.open(clickedArticle.url, '_blank')
  }

  return (
    <div className='principal'>
      <div
        onClick={() => openArticle(noticias.articles[0])}
        className='headline'
      >
        <div className='head-of-article'>
          {noticias.articles[0].urlToImage && (
            <div className='img-headline-container'>
              <img
                className='img-headline'
                src={noticias.articles[0].urlToImage}
                alt={noticias.articles[0].title}
              />
            </div>
          )}
          <div>
            <h1>{noticias.articles[0].title}</h1>
            <p className='author'>
              por:{' '}
              {noticias.articles[0].author
                ? noticias.articles[0].author
                : 'autor desconhecido'}{' '}
              -{' '}
              <span className='author'>
                {noticias.articles[0].publishedAt &&
                  `publicado em: ${noticias.articles[0].publishedAt.slice(
                    0,
                    10
                  )}`}
              </span>
            </p>
          </div>
        </div>
        <p>{noticias.articles[0].description}</p>
        <p className='author'>
          Fonte:{' '}
          <a href={noticias.articles[0].url}>
            {' '}
            {noticias.articles[0].source.name}
          </a>
        </p>
      </div>

      <div className='outras-container'>{restOfNews}</div>
    </div>
  )
}

export default Principal

//   <div className='headline'>
//     {/* <img src={} alt="" srcset="" /> */}
//     <h1>{noticias.articles[0].title}</h1>
//     <p className='author'>por: {noticias.articles[0].author}</p>
//     <p>{noticias.articles[0].description}</p>
//   </div>
