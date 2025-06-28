import { NavLink } from "react-router";
import Button from "../../components/Button/Button";
import InputControl from "../../components/InputControl/InputControl";
import Logo from "../../components/Logo/Logo";
import "./SignInPage.css";
import signInPageSrc from "./assets/signin.svg";
import googleIconSrc from "./assets/google.svg";


const formInputControlData = [
    {
        id:0,
        label:"Email Address",
        type:"email",
        placeholder:"Enter your email"
    },
    {
        id:1,
        label:"Password",
        type:"password",
        placeholder:"Enter your password"
    },
    {
        id:2,
        label:"Stay logged in",
        type:"switch",
        placeholder:"Forgot password?"
    }
]

export default function SignInPage(){
    return <div className="signinpage-container">
        <div className="signinpage-left">
            <div style={{marginLeft:'-5%'}}>
                <Logo />
            </div>
            <h3>Welcome Back!</h3>
            <p>Fill in the details, let’s do some catching up.</p>
            <form>
                {formInputControlData.map(formcontrol => {
                    return <InputControl key={formcontrol.id} {...formcontrol} />
                })}
                <Button style={{
                    borderRadius: "50px",
                    borderWidth: "1px",
                    background: "#1A3467",
                    border: "1px solid #080D17",
                    marginBottom:'12px',
                    color: "#fffff",
                    fontWeight: "600",
                    fontSize: "15px",
                    // height:'56px'
                    }}>Log in</Button>
                <Button style={{
                    borderRadius: "50px",
                    borderWidth: "1px",
                    background: "#FFFFFF",
                    marginBottom:'0px',
                    color: "#080D17",
                    fontWeight: "600",
                    fontSize: "15px",
                    display:'flex',
                    flexDircetion:'row',
                    alignItems:'center',
                    justifyContent:'center',
                    paddingTop:'10px',
                    paddingBottom:'10px',
                    border: "1px solid #080D174D"
                    // height:'56px'
                    }}>
                        <img src={googleIconSrc} alt="google icon button" width="34" height="28" />
                        {/* <img src={googleIconSrc} alt="google icon button" width="34.210269927978516" height="28" /> */}
                        <span>Continue with Google</span>
                </Button>
                <p style={{margin:'0px', marginBottom:'164px'}}>Don’t have an account? <NavLink>Sign Up</NavLink></p>
            </form>
        </div>
        <div className="signinpage-right">
            <img src={signInPageSrc} />
            <div className="signinpage-card-1">
                <h3>Welcome to MindfulSpace</h3>
                <p>Your safe space to heal, grow and thrive</p>
            </div>

            <div className="signinpage-card-2">
                <p>“Breathe in peace. Breathe out pressure.”</p>
                <p>-- Anonymous</p>
            </div>
        </div>
    </div>
}