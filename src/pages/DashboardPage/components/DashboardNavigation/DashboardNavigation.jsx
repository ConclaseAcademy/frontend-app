import "./DashboardNavigation.css";
import Logo from "../../../../components/Logo/Logo";
import BellSrc from "../../assets/dashnotification.svg";
import SettingSrc from "../../assets/dashsetting.svg";
import LanguageSrc from "../../assets/dashlanguage.svg";

export default function DashboardNavigation(){
    return <div className="dashboardnavigation-container">
        {/* <Logo /> */}
        <div>
            <ul className="dashboardnaviagtion-navitem">
                <li><img src={BellSrc} /></li>
                <li><img src={SettingSrc} /></li>
                <li className="dashboardnaviagtion-navitem-lang">
                    <img src={LanguageSrc} />
                    <p>Eng</p>
                    <img src=""/>
                </li>
            </ul>
        </div>
    </div>
}