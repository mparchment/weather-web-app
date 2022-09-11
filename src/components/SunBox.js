import '../stylesheets/SunBox.css'

import SunrisePNG from '../media/icons8-sunrise-64.png'
import SunsetPNG from '../media/icons8-sunset-64.png'
import UVPNG from '../media/icons8-summer-64.png'

function SunBox({sunrise, sunset, uvi}) {
    return (
        <div className="SunBox">
            <h1 className="Subtitle">Sun Info</h1>
            <div className="SunInfo">
                <div>
                    <h2>Sunrise</h2>
                    <img src={SunrisePNG} alt=''/>
                    <h2>{sunrise}</h2>
                </div>
                <div>
                    <h2>UV Index</h2>
                    <img src={UVPNG} alt=''/>
                    <h2>{uvi}</h2>
                </div>
                <div>
                    <h2>Sunset</h2>
                    <img src={SunsetPNG} alt=''/>
                    <h2>{sunset}</h2>
                </div>
            </div>
        </div>
    );
}

export default SunBox;
