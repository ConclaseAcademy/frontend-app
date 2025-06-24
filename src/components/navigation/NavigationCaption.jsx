import Button from "../Button/Button";
import "./NavigationCaption.css";

export default function NavigationCaption(){
    return  <div className="navigationcaption-container">
            <h1>
                Your Personal Wellness Companion
            </h1>
            <p>
                Track your mood,build healthy habits and find inner peace
                 with AI-powered insights 
                and personalised guidance
            </p>
            <div>
                <Button style={{background:'#ffff', color:'#173162'}}>Start Your Journey</Button>
                <Button style={{width:'169px'}}>Learn more</Button>
            </div>
        </div>
}