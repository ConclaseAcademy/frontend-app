import Logo from "../Logo/Logo";
import "./OnFirstTimeLoader.css";

export default function OnFirstTimeLoader(){
    return <div className="onfirsttimeloader-container">
        <Logo />
        <div className="onfirsttimeloader-container-loader">

        </div>
    </div>
}