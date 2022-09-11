import '../stylesheets/AnimationBox.css'
import Lottie from 'react-lottie';

import stormAnimation from '../media/icons8-storm.json'
import clearAnimation from '../media/icons8-sun.json'
import rainAnimation from '../media/icons8-rain.json'
import { useState } from "react";

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
        <div className="AnimationBox">
            <h1>{blurb}</h1>
            <div className="Animation">
                <div><h2>{currWeather}</h2></div>
                <div className="Lottie">
                    <span className="DesktopLottie">
                        <Lottie
                                options={defaultOptions}
                                style={{ height: "15.625rem", width: "15.625rem" }}
                        />
                    </span>
                    <span className="MobileLottie">
                        <Lottie
                                options={defaultOptions}
                                style={{ height: "7.5rem", width: "7.5rem" }}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AnimationBox;
