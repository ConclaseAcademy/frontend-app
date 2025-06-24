import Button from "../../../../components/Button/Button";
import "./About.css";
import AboutImgSrc from "../../../../assets/images/about.svg"

export default function About(){
    return <div className="about-container">
        <div>
            <img src={AboutImgSrc} alt="about" />
        </div>
        <div className="about-text">
            <h3>About MindfulSpace</h3>
            <p>We believe everyone deserves access to mental wellness tools that actually work. 
                MindfulSpace was born from the understanding that small, consistent actions can
                 create profound changes in our emotional well-being.</p>
            <Button style={{background:" #1A3467", width:'184px'}}>Get Started</Button>
        </div>
    </div>
}