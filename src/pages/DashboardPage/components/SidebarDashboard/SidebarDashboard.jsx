import Logo from "../../../../components/Logo/Logo"
import "./SidebarDashboard.css"
import SidebarDashboardIcon from "./SidebarDashboardIcon"
import { SidebarNavItem } from "./SidebarDashboardNavItems";
import ProfileSrc from "../../assets/userprofiledash.svg"

export default function SiderbarDashboard(){
    return <div className="sidebardashboard-container">
        <div>
            <Logo />
            <div className="sidedashboard-navitem">
                {SidebarNavItem.map(navitem => {
                    return <div key={navitem.id}>
                        <SidebarDashboardIcon id={navitem.id} />
                        <p>{navitem.navlink}</p>
                    </div>
                })}
            </div>
        </div>
        <div style={{display:'flex', flexDirection:'row', columnGap:'10px', alignItems:'center'}}>
            <img src={ProfileSrc} height={30} width={30} />
            <p>Profile</p>
        </div>
    </div>
}