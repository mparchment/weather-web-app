import CoveragePNG from '../media/icons8-clouds-512.png'
import '../stylesheets/CoverageBox.css'

function CoverageBox({ coverage }) {
    return (
        <div className="CoverageBox">
            <h1>Coverage</h1>
            <div className="Image">
                <img src={CoveragePNG} alt=''/>
            </div>
            <p>{coverage}%</p>
        </div>
    );
}

export default CoverageBox;