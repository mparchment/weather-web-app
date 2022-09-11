import '../stylesheets/Title.css';
import axios from "axios";

function Title({ location, setLocation, setData, url }) {

    function handleChange(event) {
        setLocation(event.target.value);
    }

    const onFormSubmit = e => {
        e.preventDefault();
        console.log(location)
        axios.get(url)
            .then((response) => {
                setData(response.data)
            })
    }

    return (
        <div className="Title Floating">
            <h1 className="Title-Text DesktopTitle">The Weather — <form onSubmit={onFormSubmit}><input className="search" type="text" value={location} onChange={handleChange}/></form></h1>
            <h1 className="MobileTitle">The Weather<form className="MobileTitle" onSubmit={onFormSubmit}><input className="mobileSearch" type="text" value={location} onChange={handleChange}/></form></h1>
        </div>
    );
}

export default Title;
