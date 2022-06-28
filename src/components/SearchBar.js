import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBar({ setUrl }) {
  const [search, setSearch] = useState('')

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         )
  //       }
  //       return response.json()
  //     })
  //     .then((actualData) => {
  //       setNoticias(actualData)
  //       setError(null)
  //     })
  //     .catch((err) => {
  //       setError(err.message)
  //       setNoticias(null)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }, [url])

  function handleSearch(e) {
    setSearch(e.target.value)
    // console.log(search)
  }

  function updateNews() {
    // console.log(search)
    const novaUrl = `https://newsapi.org/v2/top-headlines?country=br&pageSize=25&q=${search}&apiKey=c0b36feefa3d4496af378b1abd24f58c`
    setUrl(novaUrl)
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      updateNews()
    }
  }
  // console.log(noticias.totalResults)
  return (
    <div className='searchBar'>
      <input
        className='searchInput'
        type='text'
        placeholder='Procure a notícia'
        value={search}
        onChange={(e) => handleSearch(e)}
        onKeyDown={(e) => handleEnter(e)}
      ></input>
      <FaSearch onClick={updateNews} className='searchIcon' />
      {/* <p>{hojeStr}</p> */}
    </div>
  )
}

export default SearchBar
