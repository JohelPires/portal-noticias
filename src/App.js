import { useEffect, useState } from 'react'
import './App.scss'
import Destaques from './components/Destaques'

function App() {
  const [noticiasDoMes, setNoticiasDoMes] = useState({})

  useEffect(() => {
    fetch('http://servicodados.ibge.gov.br/api/v3/noticias/?de=06-01-2022')
      .then((response) => response.json())
      .then((data) => setNoticiasDoMes(data))
  }, [])

  console.log(noticiasDoMes.items[0].titulo)

  return (
    <div className='App'>
      <header className='header'>Portal Notícias</header>
      <nav>some links</nav>
      <main className='main'>
        <Destaques noticiasDoMes={noticiasDoMes} />
        <div className='principal'>noticia de capa</div>
        <div className='tempo'>Previsão do tempo</div>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
