import { useNavigate } from "react-router";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import NavItem from "./NavItem";
import './Navigation.css'
import { useState } from "react";

export default function Navigation(){
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return <div className="nav-container">
        <div className="nav-logo">
            <Logo />
        </div>

        <div className="nav-burger">
            <button className="nav-button"  onClick={() => {setIsOpen(prev => !prev)}}>
                <span style={{border:"1px solid white", marginBottom:'5px', height:'0px', width:'20px'}}></span>
                <span style={{border:"1px solid white", marginBottom:'5px', height:'0px', width:'20px'}}></span>
                <span style={{border:"1px solid white", width:'20px'}}></span>
            </button>
        </div>
        
        <div className={`nav-main ${isOpen? 'nav-active':""}`}>
            <div className="nav-item">
                <NavItem />
            </div>
            <div className="nav-login" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Button 
                    style={{
                        width:'169px',
                        fontWeight: "600",
                        fontSize: "16px"
                        }} onClick={() => navigate('/signin')}>
                    Log In
                </Button>
            </div>
        </div>
        
        {/* responsiveness */}
        {/* <div className="nav-dropdown">
            <ul className="nav-item">
                <NavItem />
            </ul>
            <div className="nav-login" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Button style={{width:'169px'}} onClick={() => navigate('/signin')}>
                    Log In
                </Button>
            </div>
        </div> */}
    </div>

}