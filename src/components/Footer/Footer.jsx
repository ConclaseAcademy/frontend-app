import "./Footer.css";
import TwitterSrc from './assets/twitter.svg';
import LinkedinSrc from './assets/linkedin.svg';
import FacebookSrc from './assets/facebook.svg';
import InstagramSrc from './assets/instagram.svg';

export default function Footer(){
    return <div className="footer-container">
            <div className="footer-card">
                <h2>Resources</h2>
                <p>Learn More</p>
                <p>FAQs</p>
            </div>
            <div className="footer-card">
                <h2>Features</h2>
                <p>Mood Tracking</p>
                <p>Journaling</p>
                <p>Meditation</p>
                <p>Habit Tracking</p>
                <p>AI Insights</p>
            </div>
            <div  className="footer-card">
                <h2>Company</h2>
                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Contact Us</p>
            </div>
            <div  className="footer-card">
                <>
                <h2>Contact Us</h2>
                <div className="footer-icon">
                    <img src={TwitterSrc} width={25.5} height={25.5} />
                    <p>Twitter</p>
                </div>
                <div className="footer-icon">
                    <img src={FacebookSrc} width={25.5} height={25.5} />
                    <p>Facebook</p>
                </div>                
                <div className="footer-icon">
                    <img src={LinkedinSrc} width={25.5} height={25.5} />
                    <p>LinkedIn</p>
                </div>                
                <div className="footer-icon">
                    <img src={InstagramSrc} width={25.5} height={25.5} />
                    <p>Instagram</p>
                </div>
                </>
            </div>
        </div>
}