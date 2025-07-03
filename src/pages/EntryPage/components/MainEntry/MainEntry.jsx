import "./MainEntry.css";
import MenuSrc from "../../assets/menu.svg";
import HomeSrc from "../../assets/home.svg";
import Logo from "../../../../components/Logo/Logo";
import userSrc from "../../assets/user.svg";
import caretDown from "../../assets/downcaret.svg";
import MainEntryTextEditor from "./MainEntryTextEditor";
import { useState } from "react";
import NavDropDownUser from "./NavDropDownUser";


export default function MainEntry(){
    const [openDropDown, setOpenDropDown] = useState(false);

    return <div className="mainentry-container">
        <div className="mainentry-nav">
            <div className="mainentry-icon">
                <img src={MenuSrc} height={40} width={40} alt="menu" />
                <img src={HomeSrc} height={40} width={40} alt="home" />
            </div>

            <Logo />

            <div style={{position:'relative'}}>
                <div className="mainentry-user" onClick={() => {setOpenDropDown(prev => !prev)}}>
                    <img src={userSrc} height={40} width={40} alt="user" />
                    <p>alex</p>
                    <img src={caretDown} alt="caret down" />
                </div>
                {openDropDown && (<NavDropDownUser />)}
            </div>
        </div>

        <div className="mainentry-texteditor">
            <MainEntryTextEditor />
        </div>
    </div>
}