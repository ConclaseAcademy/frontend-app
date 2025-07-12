import { Outlet } from "react-router-dom";
// import DashboardNavigation from "./components/DashboardNavigation/DashboardNavigation";
// import MainDashboard from "./components/MainDashboard/MainDashboard";
import SiderbarDashboard from "./components/SidebarDashboard/SidebarDashboard";
import "./DashboardPage.css";

export default function DashboardPage(){
    return <div className="dashboardpage-container">
            <SiderbarDashboard />
            <Outlet />
    </div>
}