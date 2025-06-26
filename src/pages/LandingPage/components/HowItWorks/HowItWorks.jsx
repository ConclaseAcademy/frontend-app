import "./HowItWorks.css";
import HowItWorksSrc from './assets/howitworks.svg';
import MarkSrc from "./assets/mark.svg";

export default function HowItWorks(){
    return <div className="howitworks-container">
        <img src={HowItWorksSrc} alt="how it works" width={628} height={571}/>
        <div className="howitworks-content">
            <h2>How It Works</h2>
            <p>We believe mental wellness should be simple and supportive.</p>
            <div>
                <div className="howitworks-des">
                    <img src={MarkSrc} alt="mark"/>
                    <p>Check In Daily</p>
                </div>

                <div className="howitworks-des">
                    <img src={MarkSrc} alt="mark"/>
                    <p>Reflect & Journal</p>
                </div>

                <div className="howitworks-des">
                    <img src={MarkSrc} alt="mark"/>
                    <p>Practice Mindfulness</p>
                </div>

                <div className="howitworks-des">
                    <img src={MarkSrc} alt="mark"/>
                    <p>Track Progress</p>
                </div>

            </div>
        </div>
    </div>
}