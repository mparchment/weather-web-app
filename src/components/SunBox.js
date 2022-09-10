import '../stylesheets/Information.css'
import '../stylesheets/SunBox.css'

import SunrisePNG from '../animations/icons8-sunrise-64.png'
import SunsetPNG from '../animations/icons8-sunset-64.png'

function SunBox() {
    return (
        <div className="SunBox">
            <div>
                <div>Sunrise</div>
                <div><img src={SunrisePNG} alt=''/></div>
                <div>6:32 AM</div>
            </div>
            <div>
                <div>Sunset</div>
                <div><img src={SunsetPNG} alt=''/></div>
                <div>7:46 PM</div>
            </div>
        </div>
    );
}

export default SunBox;
