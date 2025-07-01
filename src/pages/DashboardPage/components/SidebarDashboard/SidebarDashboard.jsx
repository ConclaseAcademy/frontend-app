import Logo from "../../../../components/Logo/Logo"
import "./SidebarDashboard.css"
import SidebarDashboardIcon from "./SidebarDashboardIcon"
import { SidebarNavItem } from "./SidebarDashboardNavItems"

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
        <div>
            Profile
        </div>
    </div>
}