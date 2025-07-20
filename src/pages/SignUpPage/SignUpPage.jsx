import { NavLink, useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import InputControl from "../../components/InputControl/InputControl";
import Logo from "../../components/Logo/Logo";
import "./SignUpPage.css";
import GoogleImgSrc from "./assets/google.svg";
import { formInputControlData } from "./SignUpPageFormData";
import Linebreak from "./components/Linebreak";
import signUpImgSrc from "./assets/signup.svg";
import { useState } from "react";
import axios from "axios";


export default function SignUpPage(){
    const navigate = useNavigate();

    // the state
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    });

    // handlers
    function onChangeHandler(e){
        const {name, value} = e.target;
        const newState = {...formData, [name]:value};
        setFormData(newState);
    }

    function onSubmitHandler(e){
        e.preventDefault();
        const data = {};
        const fullName = formData.name.split(" ");
        const firstName = fullName[0];
        const lastName = fullName[1];
        data.firstName = firstName;
        data.lastName = lastName;
        data.emailAddress = formData.email;
        data.password = formData.password;
        // data.role = "SuperAdmin"
        console.log("what data: ", data)

        const proxyUrl = 'https://cors-anywhere.herokuapp.com'

        // console.log("What I submitted: ", data);
        // console.log("What I submitted: ", typeof fullName, firstName, lastName);
        // axios.post('http://135.119.224.168:8000/api/v1/Authentication/register?role=SuperAdmin',
        axios.post('/api/v1/Authentication/register?role=SuperAdmin',
        // axios.post(proxyUrl + 'http://135.119.224.168:8000/api/v1/Authentication/register?role=SuperAdmin',
            data, {
            headers:{
                "Accept":"*/*",
                "Content-Type":'application/json'
            }
        }).then((res) => {
            console.log("Response: ", res)
        }).catch((err) => {
            console.log("The Error: ", err)
        })
    }

    return <div className="signuppage-container">
        <div className="signuppage-left">
            <div className="signuppage-logo">
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



            <form onSubmit={onSubmitHandler}>            
                <Linebreak />
                {formInputControlData.map(formcontrol => {
                    return <InputControl 
                    style={{background: "#0000000D"}} 
                    key={formcontrol.id} 
                    {...formcontrol} 
                    onChange={onChangeHandler}
                    value={formData[formcontrol.name]}
                    />
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
                <p style={{margin:'0px', marginTop:'-6px'}}>Already have an account? 
                    <span style={{color:"#080D17", cursor:'pointer'}} 
                    onClick={() => {navigate('/signin')}}>
                        Log In
                    </span>
                </p>
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
