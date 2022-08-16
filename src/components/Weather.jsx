// import { useState } from 'react'
// import axios from 'axios'

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=hollywood&appid=6dad2483b2f50264a7d93d178dbc1110`

const Weather = () => (
  <div className='container'>
    <div className='top'>
      <div className='name'>
        <p>Hollywood</p>
      </div>
      <div className='temp'>
        <h1>89F</h1>
      </div>
      <div className='description'>
        <p>Clear Sky</p>
      </div>
    </div>
    <div className='bottom'>
      <div className='feels'>
        <p>85F</p>
      </div>
      <div className='humidity'>
        <p>44</p>
      </div>
    </div>
  </div>
)

export default Weather
