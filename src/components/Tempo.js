import React, { useEffect, useState } from 'react'

function Tempo() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [tempo, setTempo] = useState(null)

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
      .then((actualData) => {
        setTempo(actualData)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        console.log(error)
        setTempo(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  //   console.log(
  //     tempo.daily.temperature_2m_min[tempo.daily.temperature_2m_min.length - 1]
  //   )
  //   const maxima =
  //     tempo.daily.temperature_2m_max[tempo.daily.temperature_2m_max.length - 1]
  //   const precipitation =
  //     tempo.daily.precipitation_sum[tempo.daily.precipitation_sum.length - 1]

  return (
    <div className='tempo'>
      <h2>Tempo</h2>

      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h5>
            Precipitação:{' '}
            {
              tempo.daily.precipitation_sum[
                tempo.daily.precipitation_sum.length - 1
              ]
            }
            %
          </h5>
          <h5>
            [i] Mínima:{' '}
            {
              tempo.daily.temperature_2m_min[
                tempo.daily.temperature_2m_min.length - 1
              ]
            }
            ºC
          </h5>
          <h5>
            [i] Máxima:{' '}
            {
              tempo.daily.temperature_2m_max[
                tempo.daily.temperature_2m_max.length - 1
              ]
            }
            ºC
          </h5>
        </div>
      )}
    </div>
  )
}

export default Tempo
