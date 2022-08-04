import React from 'react'
import Destaques from '../components/Destaques'
import Principal from '../components/Principal'
import Tempo from '../components/Tempo'

function Home({ noticias, loading, setUrl }) {
  return (
    <main className='main'>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <Destaques setUrl={setUrl} noticias={noticias} />
      )}

      {loading ? (
        <h2>loading</h2>
      ) : noticias.totalResults ? (
        <Principal noticias={noticias} />
      ) : (
        <h2>Nenhuma notícia encontrada</h2>
      )}

      {/* <Tempo /> */}
    </main>
  )
}

export default Home
