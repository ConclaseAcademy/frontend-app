import { Outlet } from "react-router-dom";
// import DashboardNavigation from "./components/DashboardNavigation/DashboardNavigation";
// import MainDashboard from "./components/MainDashboard/MainDashboard";
import SiderbarDashboard from "./components/SidebarDashboard/SidebarDashboard";

import "./DashboardPage.css";
import { loginData } from "../../store/modalstore";

export default function DashboardPage(){
    const token = loginData((state) => state.token);
    console.log("Dash: ", token, "here")
    return <div className="dashboardpage-container">
            <SiderbarDashboard />
            <Outlet />
    </div>
}