import '../stylesheets/Animation.css'
import '../stylesheets/Title.css'
import Lottie from 'react-lottie';

import stormAnimation from '../animations/icons8-storm.json'
import clearAnimation from '../animations/icons8-sun.json'
import rainAnimation from '../animations/icons8-rain.json'

function AnimationBox({ weather }) {

    let jsonData = null
    let blurb = ""
    let currWeather = ""

    weather = "Clear"

    if(weather === "Thunderstorm") {
        jsonData = stormAnimation;
        blurb = "Right now, there is a ...";
        currWeather = "Storm"
    }

    else if(weather === "Drizzle" || weather === "Rain") {
        jsonData = rainAnimation
        blurb = "Right now, there is ...";
        currWeather = "Rain"
    }

    else {
        jsonData = clearAnimation;
        blurb = "Right now, it is ..."
        currWeather = "Clear"
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: jsonData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="Animation">
            <div className="Subtitle">
                {blurb}
            </div>
            <div className="Inner-Animation">
                <div className="Animation-Title">
                    {currWeather}
                </div>
                <div className="Lottie">
                    <Lottie
                        options={defaultOptions}
                        height={200}
                        width={200}
                    />
                </div>
            </div>
        </div>
    );
}

export default AnimationBox;
