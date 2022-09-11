import '../stylesheets/ForecastBox.css'

import axios from "axios";
import {useEffect, useState} from "react";
import Forecast from "./Forecast";

function ForecastBox({ lat, lon, forecast_api, forecastData, setForecastData }) {

    const convertTemp = (tempKelvin) => {
        return Math.round((((tempKelvin - 273.15) * 9) / 5) + 32);
    }

    function dayOfWeekAsInteger(day) {
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        return days[day]
    }

    const toDay = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return dayOfWeekAsInteger(date.getDay());
    }

    useEffect(() => {
        axios.get(forecast_api)
            .then((response) => {
                setForecastData(response.data)
            })
    }, [lat, lon])

    const day1 = forecastData.daily ? forecastData.daily[1] : null
    const day2 = forecastData.daily ? forecastData.daily[2] : null
    const day3 = forecastData.daily ? forecastData.daily[3] : null
    const day4 = forecastData.daily ? forecastData.daily[4] : null
    const day5 = forecastData.daily ? forecastData.daily[5] : null
    const day6 = forecastData.daily ? forecastData.daily[6] : null
    const day7 = forecastData.daily ? forecastData.daily[7] : null

    return (
        <div className="ForecastBox">
            <h1>7-Day Forecast</h1>
            <Forecast
                dark={true}
                weather={day1 ? day1.weather[0].main : null}
                day={day1 ? toDay(day1.dt) : null}
                temperature={convertTemp(day1 ? day1.temp.day : null)}
            />
            <Forecast
                dark={false}
                weather={day2 ? day2.weather[0].main : null}
                day={day2 ? toDay(day2.dt) : null}
                temperature={convertTemp(day2 ? day2.temp.day : null)}
            />
            <Forecast
                dark={true}
                weather={day3 ? day3.weather[0].main : null}
                day={day3 ? toDay(day3.dt) : null}
                temperature={convertTemp(day3 ? day3.temp.day : null)}
            />
            <Forecast
                dark={false}
                weather={day4 ? day4.weather[0].main : null}
                day={day4 ? toDay(day4.dt) : null}
                temperature={convertTemp(day4 ? day4.temp.day : null)}
            />
            <Forecast
                dark={true}
                weather={day5 ? day5.weather[0].main : null}
                day={day5 ? toDay(day5.dt) : null}
                temperature={convertTemp(day5 ? day5.temp.day : null)}
            />
            <Forecast
                dark={false}
                weather={day6 ? day6.weather[0].main : null}
                day={day6 ? toDay(day6.dt) : null}
                temperature={convertTemp(day6 ? day6.temp.day : null)}
            />
            <Forecast
                dark={true}
                weather={day7 ? day7.weather[0].main : null}
                day={day7 ? toDay(day7.dt) : null}
                temperature={convertTemp(day7 ? day7.temp.day : null)}
            />
        </div>
    );
}

export default ForecastBox;
