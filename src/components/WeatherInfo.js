import '../stylesheets/WeatherInfo.css'

import TemperatureBox from "./TemperatureBox";
import SunBox from "./SunBox";
import ForecastBox from "./ForecastBox";
import WindBox from "./WindBox";
import AnimationBox from "./AnimationBox";
import CoverageBox from './CoverageBox'
import HumidityBox from './HumidityBox'

function WeatherInfo({ data, forecastData, setForecastData, forecast_api }) {

    const convertTemp = (tempKelvin) => {
        return Math.round((((tempKelvin - 273.15) * 9) / 5) + 32);
    }

    const convertTimestamp = (timestamp) =>  {
        const date = new Date(timestamp * 1000);
        const hour = date.getHours()
        const minutes = date.getMinutes()
        if (hour > 12) {
            return ((hour % 12) + ":" + minutes + " PM");
        }
        return (hour + ":" + minutes + " AM");
    }

    const temperature = convertTemp(data.main ? data.main.temp : 0)
    const feels_like = convertTemp(data.main ? data.main.feels_like : 0)
    const humidity = data.main ? data.main.humidity : 0
    const sunrise = convertTimestamp(data.sys ? data.sys.sunrise : null)
    const sunset = convertTimestamp(data.sys ? data.sys.sunset : null)
    const weather = data.weather ? data.weather[0].main : null
    const wind_speed = data.wind ? data.wind.speed : 0
    const wind_deg = data.wind ? data.wind.deg : 0
    const coverage = data.clouds ? data.clouds.all : 0
    const lat = data.coord ? data.coord.lat : 0
    const lon = data.coord ? data.coord.lon : 0
    const uvi = forecastData && forecastData.current && forecastData.current.uvi ? forecastData.current.uvi : 0.0

    return (
        <div className="WeatherInfo">
            <TemperatureBox temperature={temperature} feels_like={feels_like}/>
            <SunBox sunrise={sunrise} sunset={sunset} uvi={uvi}/>
            <AnimationBox weather={weather}/>
            <ForecastBox forecastData={forecastData} setForecastData={setForecastData} forecast_api={forecast_api} lat={lat} lon={lon}/>
            <WindBox wind_speed={wind_speed} wind_deg={wind_deg}/>
            <CoverageBox coverage={coverage}/>
            <HumidityBox humidity={humidity}/>
        </div>
    );
}

export default WeatherInfo;