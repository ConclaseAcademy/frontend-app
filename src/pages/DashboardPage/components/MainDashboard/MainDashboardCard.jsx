import Button from "../../../../components/Button/Button";
import "./MainDashboardCard.css"

export default function MainDashboardCard({label, desc, time, btn, timeColor, btnColor}){
    return  <div className="maindashboardcard-container">
            <div>
                <img src="" />
                <p>{label}</p>
            </div>
            <p>{desc}</p>
            <p className="maindashboardcard-time" style={{color:timeColor, fontSize:'14px'}}>{time}</p>
            <Button style={{background:btnColor, width: "93px", 
            // height: "32px", 
            paddingTop: "8px", paddingRight: "16px",
            paddingBottom: "8px", paddingLeft: "16px", borderRadius: "25px"}}>
               {btn}
            </Button>
        </div>
}