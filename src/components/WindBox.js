import WindPNG from '../media/icons8-wind-512.png'
import '../stylesheets/WindBox.css'

function WindBox() {

    const windRotate = "rotate(" + 349 + "deg)"

    return (
        <div className="WindBox">
            <h1>Wind</h1>
            <div className="Image">
                <img style={{ transform: windRotate }} src={WindPNG} alt=''/>
            </div>
            <p>4 MPH</p>
        </div>
    );
}

export default WindBox;
