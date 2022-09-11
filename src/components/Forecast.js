import RainIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import SnowIcon from "@mui/icons-material/AcUnit";
import returnColor from "./returnColor";

function Forecast({ dark, day, weather, temperature }) {

    let WeatherIcon;

    let div_style;
    if(dark) { div_style = "Forecast Dark"}
    else { div_style = "Forecast"}

    if(weather === "Clouds") {
        WeatherIcon = CloudIcon;
    }

    else if(weather === "Thunderstorm" || weather === "Drizzle" || weather === "Rain") {
        WeatherIcon = RainIcon;
    }

    else if(weather === "Clear") {
        WeatherIcon = SunnyIcon;
    }

    else {
        WeatherIcon = SnowIcon
    }

    return (
        <div className={div_style}>
            <div><h3>{day} ...</h3></div>
            <div>
                {weather}
                <WeatherIcon className="Icon" fontSize={"small"}/> /
                <div className="ForecastTemperature" style={{ color: `${returnColor(temperature)}`}}>
                    {temperature}°
                </div>
            </div>
        </div>
    );
}

export default Forecast;
