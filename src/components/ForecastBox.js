import '../stylesheets/Information.css';
import RainIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import SnowIcon from "@mui/icons-material/AcUnit";
import returnColor from './returnColor'

function ForecastBox() {

    return (
        <div className="Forecast-Box">
            <div className="Subtitle">7-Day Forecast</div>
            <div className="Forecast Dark">
                <div>Tuesday</div>
                <div>
                    Rain
                    <RainIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="Forecast-Temp" style={{ color: `${returnColor(63)}` }}>63°</div>
                </div>
            </div>
            <div className="Forecast">
                <div>Wednesday</div>
                <div>
                    Clear
                    <SunnyIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="Forecast-Temp" style={{ color: `${returnColor(85)}` }}>85°</div>
                </div>
            </div>
            <div className="Forecast Dark">
                <div>Thursday</div>
                <div>
                    Clouds
                    <CloudIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="Forecast-Temp" style={{ color: `${returnColor(70)}` }}>70°</div>
                </div>

            </div>
            <div className="Forecast">
                <div>Friday</div>
                <div>
                    Storm
                    <RainIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="Forecast-Temp" style={{ color: `${returnColor(71)}` }}>71°</div>
                </div>
            </div>
            <div className="Forecast Dark">
                <div>Saturday</div>
                <div>
                    Clouds
                    <CloudIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="Forecast-Temp" style={{ color: `${returnColor(74)}` }}>67°</div>
                </div>
            </div>
            <div className="Forecast">
                <div>Sunday</div>
                <div>
                    Clear
                    <SunnyIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="Forecast-Temp" style={{ color: `${returnColor(79)}` }}>79°</div>
                </div>
            </div>
            <div className="Forecast Dark">
                <div>Monday</div>
                <div>
                    Snow
                    <SnowIcon className="Icon" fontSize={"small"}/>
                    /
                    <div className="Forecast-Temp" style={{ color: `${returnColor(30)}` }}>30°</div>
                </div>
            </div>
        </div>
    );
}

export default ForecastBox;
