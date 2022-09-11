import RainPNG from '../media/icons8-rain-512.png'
import '../stylesheets/RainBox.css'

function RainBox() {
    return (
        <div className="RainBox">
            <h1>Rain</h1>
            <div className="Image">
                <img src={RainPNG} alt=''/>
            </div>
            <p>13%</p>
        </div>
    );
}

export default RainBox;