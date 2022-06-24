import React, { useEffect, useState } from 'react'

function Tempo() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [tempo, setTempo] = useState(null)

  const hoje = new Date()

  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=-15.7801&longitude=-47.9292&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America%2FSao_Paulo'

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        return response.json()
      })
      .then((actualData) => setTempo(actualData))
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const minArr = tempo.daily.temperature_2m_min
  const maxArr = tempo.daily.temperature_2m_max

  console.log('minima: ' + minArr[minArr.length - 1])
  console.log('minima: ' + minArr[minArr.length - 1])
  console.log(tempo.daily.precipitation_sum)
  console.log(hoje.getDay())
  return (
    <div className='tempo'>
      <h2>Tempo</h2>
      <h5>Dia ensolarado</h5>
      <h5>[i] Mínima: 25ºC</h5>
      <h5>[i] Máxima: 29ºC</h5>
    </div>
  )
}

export default Tempo
