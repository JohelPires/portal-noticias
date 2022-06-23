import { useEffect, useState } from 'react'
import './App.scss'
import Destaques from './components/Destaques'
import Principal from './components/Principal'

function App() {
  console.clear()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [noticias, setNoticias] = useState(null)

  // useEffect(() => {
  //   fetch('http://servicodados.ibge.gov.br/api/v3/noticias/?de=06-01-2022')
  //     .then((response) => response.json())
  //     .then((data) => setNoticiasDoMes(data))
  // }, [])

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=br&apiKey=c0b36feefa3d4496af378b1abd24f58c`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        return response.json()
      })
      .then((actualData) => {
        setNoticias(actualData)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setNoticias(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  console.log(noticias)

  return (
    <div className='App'>
      <header className='header'>Portal Notícias</header>
      <nav>some links</nav>
      <main className='main'>
        {loading ? <h2>loading</h2> : <Destaques noticias={noticias} />}

        {loading ? <h2>loading</h2> : <Principal noticias={noticias} />}

        <div className='tempo'>Previsão do tempo</div>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
