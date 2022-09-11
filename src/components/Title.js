import '../stylesheets/Title.css';
import {useState} from "react";
import axios from "axios";

function Title({ place, setData }) {
    const [location, setLocation] = useState(`${place}`)

    const api_key = "78a8ba5fefb418c25358149acee65c9c"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`

    function handleChange(event) {
        setLocation(event.target.value);
    }

    const onFormSubmit = e => {
        e.preventDefault();
        console.log(location)
        axios.get(url)
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            })
    }

    return (
        <div className="Title Floating">
            <h1 className="Title-Text DesktopTitle">The Weather — <form onSubmit={onFormSubmit}><input className="search" type="text" value={location} onChange={handleChange}/></form></h1>
            <h1 className="Title-Text MobileTitle">The Weather</h1>
        </div>
    );
}

export default Title;
