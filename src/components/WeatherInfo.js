import '../stylesheets/WeatherInfo.css'

import TemperatureBox from "./TemperatureBox";
import SunBox from "./SunBox";
import ForecastBox from "./ForecastBox";
import WindBox from "./WindBox";
import AnimationBox from "./AnimationBox";
import RainBox from './RainBox'
import HumidityBox from './HumidityBox'

function WeatherInfo() {
    return (
        <div className="WeatherInfo">
            <TemperatureBox/>
            <SunBox/>
            <AnimationBox/>
            <ForecastBox/>
            <WindBox/>
            <RainBox/>
            <HumidityBox/>
        </div>
    );
}

export default WeatherInfo;