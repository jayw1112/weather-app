import { useState } from 'react'
import axios from 'axios'
import classes from './Weather.module.css'

const Weather = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6dad2483b2f50264a7d93d178dbc1110`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <input
          className={classes.input}
          type='text'
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
        />
      </div>
      <div className={classes.top}>
        <div className={classes.name}>
          <h2>{data.name}</h2>
        </div>
        <div className={classes.temp}>
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
        </div>
        <div className={classes.description}>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>

      {data.name != undefined && (
        <div className={classes.bottom}>
          <div className={classes.feels}>
            {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
            <p className={classes.detail}>Feels Like</p>
          </div>
          <div className={classes.humidity}>
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p className={classes.detail}>Humidity</p>
          </div>
          <div className={classes.wind}>
            {data.wind ? <p>{data.wind.speed.toFixed()}MPH</p> : null}
            <p className={classes.detail}>Wind Speed</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Weather
