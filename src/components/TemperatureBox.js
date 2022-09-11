import '../stylesheets/TemperatureBox.css'
import returnColor from "./returnColor";

function TemperatureBox({ temperature, feels_like }) {
    return (
        <div className="TemperatureBox">
            <h1>Temperature</h1>
            <p style={{ color: `${returnColor(temperature)}` }} className="Temperature">{temperature}°</p>
            <p>Feels like: {feels_like}°</p>
        </div>
    );
}

export default TemperatureBox;
