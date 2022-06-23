import React, { useEffect, useState } from 'react'

function Tempo() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [tempo, setTempo] = useState(null)
  const chaveHGWeather = '8b5bc9b6'
  const openWeatherKey = '10c4c08af7dca2dbed1c13dc8a0539e2'

  //   const url =
  //     'http://apiadvisor.climatempo.com.br/api/v1/forecast/region/centro-oeste?token=aa818750d5a36ef962e51ea0481fe9f8'

  //   useEffect(() => {
  //     fetch(
  //       `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${openWeatherKey}`
  //     )
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(
  //             `This is an HTTP error: The status is ${response.status}`
  //           )
  //         }
  //         return response.json()
  //       })
  //       .then((actualData) => console.log(actualData))
  //       .catch((err) => {
  //         console.log(err.message)
  //       })
  //   }, [])

  //   console.log(tempo)
  return <div className='tempo'>Previsão do tempo</div>
}

export default Tempo
