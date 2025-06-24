import { useNavigate } from "react-router";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import NavItem from "./NavItem";
import './Navigation.css'

export default function Navigation(){
    const navigate = useNavigate();

    return <div className="nav-container">
        <Logo />
        <NavItem />
        <Button style={{width:'169px'}} onClick={() => navigate('/signin')}>
            Log In
        </Button>
    </div>
}