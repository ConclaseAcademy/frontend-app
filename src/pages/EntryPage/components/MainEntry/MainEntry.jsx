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
import RippleEffect from "../../../../components/RippleEffect/RippleEffect";
import LogoSrc from "../../../../assets/images/logo.svg"
import { useNavigate } from "react-router";


export default function MainEntry(){
    const navigate = useNavigate();
    const [openDropDown, setOpenDropDown] = useState(false);
    const navRef = useRef(null); 

    // getting the slice of the state in toogling the sidebar
    const sidebarstate = useStore((state) => state.sidebarnav);
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

    return <div className={`mainentry-container ${sidebarstate?"mainentry-container-open":''}`}>
        <div className="mainentry-nav">
            <div className="mainentry-icon">
                <RippleEffect>
                    <img src={MenuSrc} height={40}
                    onClick={() => {toggleSideBarNav()}}
                    width={40} alt="menu" />
                </RippleEffect>
                <RippleEffect onClick={() => {
                    navigate("/dashboard")
                }}>
                    <img src={HomeSrc} height={40} width={40} alt="home"  />
                </RippleEffect>
            </div>

            {/* <div className="mainentry-logo">
                <Logo />
            </div> */}

            <img src={LogoSrc} />

            <div style={{position:'relative'}}>
                <RippleEffect>
                    <div className="mainentry-user" 
                        onClick={(e) => {
                            e.stopPropagation()
                            setOpenDropDown(prev => !prev)
                            }}>
                        <img src={userSrc} height={40} width={40} alt="user" />
                        <p style={{margin:'0px', padding:'0px'}}>Alex</p>
                        <img src={caretDown} alt="caret down" />
                    </div>
                </RippleEffect>
                {openDropDown && (<NavDropDownUser ref={navRef} />)}
            </div>
        </div>

        <div className="mainentry-texteditor">
            <MainEntryTextEditor />
        </div>
    </div>
}