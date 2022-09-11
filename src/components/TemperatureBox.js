import '../stylesheets/TemperatureBox.css'
import returnColor from "./returnColor";

function TemperatureBox() {

    const current_temperature = 77;
    const feels_like_temperature = 83;

    return (
        <div className="TemperatureBox">
            <h1>Temperature</h1>
            <p style={{ color: `${returnColor(current_temperature)}` }} className="Temperature">{current_temperature}°</p>
            <p>Feels like: <span style={{ color: `${returnColor(feels_like_temperature)}` }}>{feels_like_temperature}°</span></p>
        </div>
    );
}

export default TemperatureBox;
