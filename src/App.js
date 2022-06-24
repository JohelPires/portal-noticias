import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Article from './pages/Article'

import Home from './pages/Home'

function App() {
  console.clear()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [noticias, setNoticias] = useState(null)

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

  console.log(noticias)

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <SearchBar />
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
