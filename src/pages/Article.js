import React from 'react'
import { Link } from 'react-router-dom'

function Article({ article }) {
  console.log(article)
  return (
    <div>
      <Link to='/'>Voltar</Link>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  )
}

export default Article
