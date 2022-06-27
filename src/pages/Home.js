import React from 'react'
import Destaques from '../components/Destaques'
import Principal from '../components/Principal'
import Tempo from '../components/Tempo'

function Home({ noticias, loading, setArticle }) {
  return (
    <main className='main'>
      {loading ? <h2>loading</h2> : <Destaques noticias={noticias} />}

      {loading ? (
        <h2>loading</h2>
      ) : noticias.totalResults ? (
        <Principal setArticle={setArticle} noticias={noticias} />
      ) : (
        <h2>Nenhuma notícia encontrada</h2>
      )}

      <Tempo />
    </main>
  )
}

export default Home
