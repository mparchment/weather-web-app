import '../stylesheets/Information.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import ForecastBox from './ForecastBox'
import TemperatureBox from './TemperatureBox'
import AnimationBox from './AnimationBox'
import WindBox from './WindBox'
import SunBox from './SunBox'

function Information() {

    return (
        <div className="Information">
            <TemperatureBox/>
            <SunBox/>
            <ForecastBox/>
            <WindBox/>
            <AnimationBox/>
            <div>Rain</div>
            <div>Clouds</div>
        </div>
    );
}

export default Information;
