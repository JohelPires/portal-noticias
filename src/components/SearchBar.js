import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
  const [search, setSearch] = useState('')
  function handleSearch(e) {
    setSearch(e.target.value)
    console.log(search)
  }

  function updateNews() {
    console.log(search)
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      updateNews()
    }
  }
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
      <FaSearch onClick={updateNews} />
      {/* <p>{hojeStr}</p> */}
    </div>
  )
}

export default SearchBar
