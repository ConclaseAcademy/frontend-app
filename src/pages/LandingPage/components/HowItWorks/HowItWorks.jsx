import "./HowItWorks.css";
import HowItWorksSrc from './assets/howitworks.svg';
import MarkSrc from "./assets/mark.svg";

export default function HowItWorks(){
    return <div style={{paddingTop:'54px', paddingBottom:'10px'}}>
    {/* return <div style={{paddingTop:'54px', paddingBottom:'54px', background:' #F4F4F5'}}> */}
    <div style={{paddingTop:'24', paddingBottom:'66px'}}>
    <div className="howitworks-container">
        <img className="howitworks-img" src={HowItWorksSrc} alt="how it works"/>
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

    </div>
    </div>
}