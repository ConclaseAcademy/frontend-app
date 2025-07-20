import "../../EntryPage/components/MainEntry/MainEntry.css";
import MenuSrc from "../../EntryPage/assets/menu.svg";
import HomeSrc from "../../EntryPage/assets/home.svg";
import userSrc from "../../EntryPage/assets/user.svg";
import caretDown from "../../EntryPage/assets/downcaret.svg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import LogoSrc from "../../../assets/images/logo.svg";
import NavDropDownUser from "../../EntryPage/components/MainEntry/NavDropDownUser";
import { useStore } from "../../../store/modalstore";
import RippleEffect from "../../../components/RippleEffect/RippleEffect";
import MiddleSection from "./MiddleSection";
import EntrySection from "./Entrysection";
import { FaSearch } from "react-icons/fa";

export default function MainjournalPage() {
  const navigate = useNavigate();
  const [openDropDown, setOpenDropDown] = useState(false);
  const navRef = useRef(null);


  const sidebarstate = useStore((state) => state.sidebarnav);
  const toggleSideBarNav = useStore((state) => state.sideBarNav);

  console.log("togglesid", sidebarstate);


  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropDown(false);
      }
    });

    return () =>
      document.removeEventListener("click", (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
          setOpenDropDown(false);
        }
      });
  }, []);

  return (
    <div
      className={`mainentry-container ${
        sidebarstate ? "mainentry-container-open" : ""
      }`}
    >
      <div className="mainentry-nav">
        <div className="mainentry-icon">
          <RippleEffect>
            <img
              src={MenuSrc}
              height={40}
              onClick={() => {
                toggleSideBarNav();
              }}
              width={40}
              alt="menu"
            />
          </RippleEffect>
          <RippleEffect
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <img src={HomeSrc} height={40} width={40} alt="home" />
          </RippleEffect>
          
          <div className="mainentry-search">
            <input type="text" placeholder="Search Journal" />
            <FaSearch className="search-icon" />
          </div>
        </div>

        <img src={LogoSrc} className="mainentry-logo" />

        <div style={{ position: "relative" }}>
          <RippleEffect>
            <div
              className="mainentry-user"
              onClick={(e) => {
                e.stopPropagation();
                setOpenDropDown((prev) => !prev);
              }}
            >
              <img src={userSrc} height={40} width={40} alt="user" />
              <p style={{ margin: "0px", padding: "0px" }}>Alex</p>
              <img src={caretDown} alt="caret down" />
            </div>
          </RippleEffect>
          {openDropDown && <NavDropDownUser ref={navRef} />}
        </div>
      </div>

      <div>
        <MiddleSection />
        <EntrySection />
      </div>
    </div>
  );
}
