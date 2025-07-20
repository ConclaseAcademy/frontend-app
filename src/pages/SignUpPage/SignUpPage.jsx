import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import InputControl from "../../components/InputControl/InputControl";
import Logo from "../../components/Logo/Logo";
import { toast } from 'react-toastify';
import "./SignUpPage.css";
import GoogleImgSrc from "./assets/google.svg";
import { formInputControlData } from "./SignUpPageFormData";
import Linebreak from "./components/Linebreak";
import signUpImgSrc from "./assets/signup.svg";
import { useRef, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import { loginData } from "../../store/modalstore";


export default function SignUpPage(){
    const formRef = useRef(null);
    const navigate = useNavigate();
    
    // getting the slice of the state
    const newToken = loginData((state)=>state.updateToken);
    const newRole = loginData((state)=>state.updateRole);

    // the state
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        term:false
    });

    const [error, setError] = useState({
        name:'',
        email:'',
        password:'',
        term:false
    });

    const [loader, setLoader] = useState(false);

    // validation
    function validateInput(){
        let isValid = true

        const newErr = {
            name:'',
            email:'',
            password:'',
            term:false
        }

        if(formData.name == ""){
            const name = formRef.current?.['name'];
            newErr.name = "Name can't be Empty!";
            name.focus()
            isValid = false;
        }else if(!/^[A-Za-z]+ [A-Za-z]+$/.test(formData.name)){
            const name = formRef.current?.['name'];
            newErr.name = "Name is invalid 'John Doe'";
            name.focus()
            isValid = false;
        } else if(formData.email == ""){
            const email = formRef.current?.['email'];
            newErr.email = "Email can't be Empty!";
            email.focus()
            isValid = false;
        } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)){
            const email = formRef.current?.['email'];
            newErr.email = "Enter a valid email!";
            email.focus()
            isValid = false;
        }else if(formData.password == ""){
            const password = formRef.current?.['password'];
            newErr.password = "Password can't be Empty!";
            password.focus()
            isValid = false;
        } else if(formData.password.length < 6){
            const password = formRef.current?.['password'];
            newErr.password = "Password must be more than 6!";
            password.focus()
            isValid = false;

        } else if(!formData.term){
            const term = formRef.current?.['term'];
            newErr.term = "You must agree to the terms and conditions!"
            term.focus()
            isValid = false;
        }
        setError(newErr);

        return isValid;
    }

    // handlers
    function onChangeHandler(e){
        const {name, value, checked} = e.target;
        const valueInput = name=="term"?checked:value;
        const newState = {...formData, [name]:valueInput};
        setFormData(newState);
    }

    async function onSubmitHandler(e){
        e.preventDefault();
        const isValid = validateInput();
        if(!isValid) return;

        const data = {};
        const fullName = formData.name.split(" ");
        const firstName = fullName[0];
        const lastName = fullName[1];
        data.firstName = firstName;
        data.lastName = lastName;
        data.emailAddress = formData.email;
        data.password = formData.password;

        // set loader
        setLoader(true);

        axios.post('http://135.119.224.168:8000/api/v1/Authentication/register?role=RegularUser',
            data, {
            headers:{
                "Accept":"*/*",
                "Content-Type":'application/json'
            }
        }).then((res) => {
            if(res.status == 200){
                toast.success("Registration successful!");

                    // login after registration
                    return axios.post('http://135.119.224.168:8000/api/v1/Authentication',
                            {
                                email:data.emailAddress,
                                password:data.password
                            }, {
                            headers:{
                                "Accept":"*/*",
                                "Content-Type":'application/json'
                            }
                        }).then((res) => {
                            if(res.status == 200){
                                toast.success("Loging User in!");
                                // save it in the store
                                console.log("Login Success: ", res.data.data)
                                newRole(res.data.data.role)
                                newToken(res.data.data.token)
                                setTimeout(() => {
                                    navigate('/dashboard')
                                }, 3000)
                            }
                    }).catch((err) => {
                        console.log("The Error: ", err)
                        toast.error(err.message || "Registration failed.");
                    });
            }
        }).catch((err) => {
            console.log("The Error: ", err)
            toast.error(err?.response?.data?.message || err.message || "Registration failed.");
        }).finally(() => {
            setLoader(false)
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



            <form ref={formRef} onSubmit={onSubmitHandler}>            
                <Linebreak />
                {formInputControlData.map(formcontrol => {
                    return <InputControl 
                    style={{background: "#0000000D"}} 
                    key={formcontrol.id} 
                    {...formcontrol} 
                    onChange={onChangeHandler}
                    value={formData[formcontrol.name]}
                    checked={formcontrol.name == "term"?formData[formcontrol.name]:null}
                    error={error[formcontrol.name]}
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
                            display:'flex',
                            flexDircetion:'row',
                            alignItems:'center',
                            justifyContent:'center',
                            columnGap:'10px'
                            }}>
                            <span style={{
                                    fontWeight: "600",
                                    fontSize: "15px"}}>Sign Up</span>
                    {loader?<Loader />:null}
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
