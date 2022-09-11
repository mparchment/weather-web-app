import Title from './Title'
import WeatherInfo from './WeatherInfo'

import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [forecastData, setForecastData] = useState({})

    const api_key = "7336de3bafdfe94a226fa9f29cf6ae52"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`
    const forecast_api = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord ? data.coord.lat : 0}&lon=${data.coord ? data.coord.lon : 0}&exclude=currently,minutely,hourly&appid=${api_key}`

    const reqLocation = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords_url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${api_key}`
            axios.get(coords_url)
                .then((response) => {
                    setData(response.data)
                    setLocation(response.data.name)
                })
        })
    }

    useEffect(() => {
        reqLocation();
    }, [])

    return (
        <div className="App">
            <Title location={location} setLocation={setLocation} setData={setData} url={url}/>
            <WeatherInfo data={data} setForecastData={setForecastData} forecast_api={forecast_api} forecastData={forecastData}/>
        </div>
    );
}

export default App;
