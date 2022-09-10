import '../stylesheets/Information.css';
import returnColor from "./returnColor";
import ThermostatIcon from '@mui/icons-material/Thermostat';

function TemperatureBox() {

    const temp = 77;

    return (
        <div className="TemperatureBox">
            <div className="Subtitle">Temperature</div>
            <div style={{ color: `${returnColor(temp)}` }} className="Temperature">77°</div>
            <div>Feels like: 79°</div>
        </div>
    );
}

export default TemperatureBox;
