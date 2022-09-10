import WindPNG from '../animations/icons8-wind-64.png'

function WindBox() {

    const windRotate = "rotate(" + 349 + "deg)"

    return (
        <div className="WindBox">
            <div className="Subtitle">Wind</div>
            <div><img style={{ transform: windRotate }} src={WindPNG} alt=''/></div>
        </div>
    );
}

export default WindBox;
