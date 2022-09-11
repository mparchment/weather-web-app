import '../stylesheets/ForecastBox.css'

import RainIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import SnowIcon from "@mui/icons-material/AcUnit";
import returnColor from './returnColor'

function ForecastBox() {

    return (
        <div className="ForecastBox">
            <h1>7-Day Forecast</h1>
            <div className="Forecast Dark">
                <div><h3>Tuesday ...</h3></div>
                <div>
                    Rain
                    <RainIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="ForecastTemperature" style={{ color: `${returnColor(63)}` }}>63°</div>
                </div>
            </div>
            <div className="Forecast">
                <div><h3>Wednesday ...</h3></div>
                <div>
                    Clear
                    <SunnyIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="ForecastTemperature" style={{ color: `${returnColor(85)}` }}>85°</div>
                </div>
            </div>
            <div className="Forecast Dark">
                <div><h3>Thursday ...</h3></div>
                <div>
                    Clouds
                    <CloudIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="ForecastTemperature" style={{ color: `${returnColor(70)}` }}>70°</div>
                </div>

            </div>
            <div className="Forecast">
                <div><h3>Friday ...</h3></div>
                <div>
                    Storm
                    <RainIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="ForecastTemperature" style={{ color: `${returnColor(71)}` }}>71°</div>
                </div>
            </div>
            <div className="Forecast Dark">
                <div><h3>Saturday ...</h3></div>
                <div>
                    Clouds
                    <CloudIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="ForecastTemperature" style={{ color: `${returnColor(74)}` }}>67°</div>
                </div>
            </div>
            <div className="Forecast">
                <div><h3>Sunday ...</h3></div>
                <div>
                    Clear
                    <SunnyIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="ForecastTemperature" style={{ color: `${returnColor(79)}` }}>79°</div>
                </div>
            </div>
            <div className="Forecast Dark">
                <div><h3>Monday ...</h3></div>
                <div>
                    Snow
                    <SnowIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="ForecastTemperature" style={{ color: `${returnColor(30)}` }}>30°</div>
                </div>
            </div>
        </div>
    );
}

export default ForecastBox;
