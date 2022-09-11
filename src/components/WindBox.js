import WindPNG from '../media/icons8-wind-512.png'
import '../stylesheets/WindBox.css'

function WindBox({ wind_speed, wind_deg }) {

    const windRotate = "rotate(" + wind_deg + "deg)"

    return (
        <div className="WindBox">
            <h1>Wind</h1>
            <div className="Image">
                <img style={{ transform: windRotate }} src={WindPNG} alt=''/>
            </div>
            <p>{wind_speed} MPH</p>
        </div>
    );
}

export default WindBox;
