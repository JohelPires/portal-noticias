import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Article from './pages/Article'

import Home from './pages/Home'

function App() {
  // console.clear()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [noticias, setNoticias] = useState(null)

  // escreve a data por extenso:
  const hoje = new Date()
  const semana = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo',
  ]
  const mes = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]
  const hojeStr =
    semana[hoje.getDay() - 1] +
    ', ' +
    hoje.getDate() +
    ' de ' +
    mes[hoje.getMonth() - 1] +
    ' de ' +
    hoje.getFullYear()

  // pega as notícias:

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=br&pageSize=10&apiKey=c0b36feefa3d4496af378b1abd24f58c`
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

  return (
    <BrowserRouter>
      <div className='App'>
        <Header hojeStr={hojeStr} />
        <SearchBar
          noticias={noticias}
          setNoticias={setNoticias}
          setError={setError}
          setLoading={setLoading}
        />
        {/* <div className='acoes'>nasdaq, bovespa, bitcoin, etc</div> */}
        <Routes>
          <Route
            exact
            path='/'
            element={<Home loading={loading} noticias={noticias} />}
          />
          <Route path='/article' element={<Article />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
