import DashboardNavigation from "./components/DashboardNavigation/DashboardNavigation";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import SiderbarDashboard from "./components/SidebarDashboard/SidebarDashboard";
import "./DashboardPage.css";

export default function DashboardPage(){
    return <div className="dashboardpage-container">
        {/* <DashboardNavigation /> */}
        <div style={{display:'grid', height:"100%", gridTemplateColumns:"1fr 4fr", gridTemplateRows:'1fr'}}>
            <SiderbarDashboard />
            <MainDashboard />
        </div>
    </div>
}