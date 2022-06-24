import React from 'react'
import Destaques from '../components/Destaques'
import Principal from '../components/Principal'
import Tempo from '../components/Tempo'

function Home({ noticias, loading }) {
  return (
    <main className='main'>
      {loading ? <h2>loading</h2> : <Destaques noticias={noticias} />}

      {loading ? <h2>loading</h2> : <Principal noticias={noticias} />}

      <Tempo />
    </main>
  )
}

export default Home
