import Logo from "../../../../components/Logo/Logo"
import "./SidebarDashboard.css"
import SidebarDashboardIcon from "./SidebarDashboardIcon"
import { SidebarNavItem } from "./SidebarDashboardNavItems";
import ProfileSrc from "../../assets/userprofiledash.svg";
import RippleEffect from "../../../../components/RippleEffect/RippleEffect";
import { useNavigate } from "react-router";

export default function SiderbarDashboard(){
    const navigate = useNavigate();

    return <div className="sidebardashboard-container">
        <div>
            <Logo />
            <div className="sidedashboard-navitem">
                {SidebarNavItem.map(navitem => {
                    return <RippleEffect key={navitem.id} style={{display:'block'}}>
                        <div onClick={() => {
                            navigate(navitem.link)
                        }}>
                            <SidebarDashboardIcon id={navitem.id} />
                            <p>{navitem.navlink}</p>
                        </div>
                    </RippleEffect>
                })}
            </div>
        </div>
        <div style={{display:'flex', flexDirection:'row', columnGap:'10px', alignItems:'center'}}>
            <img src={ProfileSrc} height={30} width={30} />
            <p>Profile</p>
        </div>
    </div>
}