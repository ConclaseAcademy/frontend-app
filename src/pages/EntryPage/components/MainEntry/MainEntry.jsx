import "./MainEntry.css";
import MenuSrc from "../../assets/menu.svg";
import HomeSrc from "../../assets/home.svg";
import Logo from "../../../../components/Logo/Logo";
import userSrc from "../../assets/user.svg";
import caretDown from "../../assets/downcaret.svg";
import MainEntryTextEditor from "./MainEntryTextEditor";
import { useEffect, useRef, useState } from "react";
import NavDropDownUser from "./NavDropDownUser";
import { useStore } from "../../../../store/modalstore";
import { flushSync } from "react-dom";


export default function MainEntry(){
    const [openDropDown, setOpenDropDown] = useState(false);
    const navRef = useRef(null); 

    // getting the slice of the state in toogling the sidebar
    const toggleSideBarNav = useStore((state) => state.sideBarNav);

    // closing the popup when clicked on anywhere in the document
    useEffect(() => {
        document.addEventListener('click', (e) => {        
            if(navRef.current && !navRef.current.contains(e.target)){
                setOpenDropDown(false);
            }
        });

        return document.removeEventListener('click', (e) => {
            if(navRef.current && !navRef.current.contains(e.target)){
                setOpenDropDown(false);
            }
        });
    }, [])

    return <div className="mainentry-container">
        <div className="mainentry-nav">
            <div className="mainentry-icon">
                <img src={MenuSrc} height={40}
                onClick={() => {toggleSideBarNav()}}
                 width={40} alt="menu" />
                <img src={HomeSrc} height={40} width={40} alt="home" />
            </div>

            <Logo />

            <div style={{position:'relative'}}>
                <div className="mainentry-user" 
                    onClick={(e) => {
                        e.stopPropagation()
                        setOpenDropDown(prev => !prev)
                        }}>
                    <img src={userSrc} height={40} width={40} alt="user" />
                    <p style={{margin:'0px', padding:'0px'}}>Alex</p>
                    <img src={caretDown} alt="caret down" />
                </div>
                {openDropDown && (<NavDropDownUser ref={navRef} />)}
            </div>
        </div>

        <div className="mainentry-texteditor">
            <MainEntryTextEditor />
        </div>
    </div>
}