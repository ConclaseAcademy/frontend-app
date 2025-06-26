import "./DashboardNavigation.css";
import Logo from "../../../../components/Logo/Logo"

export default function DashboardNavigation(){
    return <div className="dashboardnavigation-container">
        <Logo />
        <div>
            <ul className="dashboardnaviagtion-navitem">
                <li>bell</li>
                <li>settings</li>
                <li>language</li>
            </ul>
        </div>
    </div>
}