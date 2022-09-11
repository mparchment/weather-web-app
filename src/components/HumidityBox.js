import HumidityPNG from "../media/icons8-hygrometer-512.png";
import '../stylesheets/HumidityBox.css'

function HumidityBox() {
    return (
        <div className="HumidityBox">
            <h1>Humidity</h1>
            <div className="Image">
                <img src={HumidityPNG} alt=''/>
            </div>
            <p>79%</p>
        </div>
    );
}

export default HumidityBox;