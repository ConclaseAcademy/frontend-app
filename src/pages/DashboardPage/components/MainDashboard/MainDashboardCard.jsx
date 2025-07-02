import Button from "../../../../components/Button/Button";
import "./MainDashboardCard.css"
import MainDashboardCardImg from "./MainDashboardCardImg.jsx";

export default function MainDashboardCard({label, desc, time, btn, timeColor, btnColor}){
    return  <div className="maindashboardcard-container">
            <div className="maindashboardcard-img">
                <MainDashboardCardImg label={label} />
                <p>{label}</p>
            </div>
            <p className="maindashboardcard-desc">{desc}</p>
            <p className="maindashboardcard-time" style={{color:timeColor, fontSize:'14px'}}>{time}</p>
            <Button style={{background:btnColor, width: "93px", 
            // height: "32px", 
            paddingTop: "8px", paddingRight: "16px",
            paddingBottom: "8px", paddingLeft: "16px", borderRadius: "25px"}}>
               {btn}
            </Button>
        </div>
}