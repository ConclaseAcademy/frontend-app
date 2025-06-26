import "./SidebarDashboard.css"
import { SidebarNavItem } from "./SidebarDashboardNavItems"

export default function SiderbarDashboard(){
    return <div className="sidebardashboard-container">
        <div>
            {SidebarNavItem.map(navitem => {
                return <div key={navitem.id}>{navitem.navlink}</div>
            })}
        </div>
        <div>
            Profile
        </div>
    </div>
}