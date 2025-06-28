import { NavLink } from "react-router";
import Button from "../../components/Button/Button";
import InputControl from "../../components/InputControl/InputControl";
import Logo from "../../components/Logo/Logo";
import "./SignUpPage.css";
import GoogleImgSrc from "./assets/google.svg";
import { formInputControlData } from "./SignUpPageFormData";
import Linebreak from "./components/Linebreak";
import signUpImgSrc from "./assets/signup.svg";


export default function SignUpPage(){
    return <div className="signuppage-container">
        <div className="signuppage-left">
            <div className="signuppage-logo">
            {/* <div style={{marginLeft:'-50px', marginBottom:'97px'}}> */}
                <Logo />
            </div>
            <div className="signuppage-card-1">
                <h3>Create your account</h3>
                <p>Let’s get started with your 30 days free trial</p>
                <Button style={{
                            borderRadius: "50px",
                            borderWidth: "1px",
                            background: "#FFFFFF",
                            marginBottom:'22px',
                            color: "#080D17",
                            fontWeight: "600",
                            fontSize: "15px",
                            display:'flex',
                            flexDircetion:'row',
                            alignItems:'center',
                            justifyContent:'center',
                            paddingTop:'10px',
                            paddingBottom:'10px',
                            border: "1px solid #080D174D",
                            paddingLeft:"20%",
                            paddingRight:"20%"
                            }}>
                            <img src={GoogleImgSrc} alt="google icon button" width="34" height="28" />
                            <span>Continue with Google</span>
                </Button>
            </div>



            <form>            
                <Linebreak />
                {formInputControlData.map(formcontrol => {
                    return <InputControl style={{background: "#0000000D"}} key={formcontrol.id} {...formcontrol} />
                })}
                <Button 
                    style={{
                            borderRadius: "50px",
                            borderWidth: "1px",
                            background: "#1A3467",
                            border: "1px solid #080D17",
                            marginBottom:'12px',
                            color: "#fffff",
                            fontWeight: "600",
                            fontSize: "15px",
                            }}>
                    Sign Up
                </Button>
                <p style={{margin:'0px', marginTop:'-6px'}}>Already have an account? <NavLink>Log In</NavLink></p>
            </form>
        </div>
        <div className="signuppage-right">
            {/* <img src={signUpImgSrc} alt="signup image" height="870" /> */}
            <div className="signuppage-right-content" >
                <img src={signUpImgSrc} alt="signup image" />
                <h3>Discovering the best Space for your Mental well-being</h3>
            </div>
            {/* <img src={signUpImgSrc} alt="signup image" width="652" height="870" /> */}
        </div>
    </div>
}