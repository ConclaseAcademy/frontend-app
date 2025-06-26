import Button from "../../../../components/Button/Button";
import "./CTA.css";

export default function CTA(){
    return <div className="cta-container">
        <div className="cta-overlay"></div>
    <div className="cta-content">
        <div className="inner"> 
        <h3>Ready to Transform Your Wellness Journey?</h3>
        <p>Join thousands of users who have found peace and clarity with MindfulSpace</p>
        <Button style={{
            // width: 278;
            // height: 68;
            // gap: 10px;
            borderRadius: "50px",
            padding:"16px",
            background: "#1A3467",
            border:"2px solid #1A3467",
            fontWeight:'600',
            fontSize:'20px'

            }}>Start Free Today</Button>
        </div>
    </div>
    </div>
}