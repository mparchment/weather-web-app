import Title from './Title'
import WeatherInfo from './WeatherInfo'

import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
    const [data, setData] = useState({})
    const api_key = "78a8ba5fefb418c25358149acee65c9c"

    const reqLocation = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords_url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${api_key}`
            axios.get(coords_url)
                .then((response) => {
                    setData(response.data)
                    console.log(response.data)
                })
        })
    }

    useEffect(() => {
        reqLocation();
    }, [])

    let place = ''
    if(data.main) { place = data.name }

    return (
        <div className="App">
            <Title place={place} setData={setData}/>
            <WeatherInfo data={data}/>
        </div>
    );
}

export default App;
