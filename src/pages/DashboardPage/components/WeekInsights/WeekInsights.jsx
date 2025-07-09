import "./WeekInsights.css";
import BalloonSrc from "../../assets/dashlightbulb.svg";
import WeekInsightsLineChart from "./WeekInsightsLineChart";


export default function WeekInsights(){
    return <div className="weekinsights-container">
        <div className="weekinsights-header">
            <h3>This Week's Insight</h3>
            <p 
              style={{
                // textDecoration:'underline',
                fontStyle:'normal',
                fontWeight: "400",
                fontSize:"14px",
                color: "#0557FB",
                
                }}>
              View Details
            </p>
        </div>
        
        <WeekInsightsLineChart />

        <div className="weekinsights-info">
            <img src={BalloonSrc} />
            <p>You feel more calm on days with journaling</p>
        </div>
    </div>
}



