import JournalAnalysis from "../JournalAnalysis/JournalAnalysis";
import WeekInsights from "../WeekInsights/WeekInsights";
import "./MainDashboard.css";
import MainDashboardCard from "./MainDashboardCard";
import BalloonSrc from "../../assets/dashballoon.svg";
import WeeklyProgress from "../WeeklyProgress/WeeklyProgress";
import TodayHabitsSrc from "../../assets/dashdirecthit.svg";
import DashboardNavigation from "../DashboardNavigation/DashboardNavigation"
import { mainDashCardData } from "./MainDashboardData";

// fetching from an Api


export default function MainDashboard(){
    return <div className="maindashboard-container">
        <DashboardNavigation />
        <p className="maindashboard-p-1">Welcome back, Alex!</p>
        <p className="maindashboard-p-2">Let's check in on your mind today</p>
        <div className="maindashboard-status">
            {mainDashCardData.map(item => <MainDashboardCard key={item.id} {...item} />)}
        </div>

        <div className="maindashboard-mid">
            <WeekInsights />
            <JournalAnalysis />
        </div>

        <div className="maindashboard-piestatus">
            <WeeklyProgress />
            <div className="maindashboard-todaysactivity">
                <div>
                    <div style={{display:'flex', flexDirection:'row',
                        marginBottom:'15px',alignItems:"center",
                        columnGap:'8px'}}>
                        <img src={TodayHabitsSrc} />
                        <h3 style={{
                            fontWeight: "600",
                            fontSize: "15px",
                            color: "#080D17",
                            margin:'0px',
                            padding:'0px',
                            }}>Today’s Habits</h3>
                    </div>
                    <div style={{display:'flex', flexDirection:'row',  
                    alignItems:'center', textAlign:'center',
                    marginBottom:'10px', columnGap:'8px'}}>
                        <input type="radio" />
                        <p style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#080D17",
                            margin:'0px',
                            padding:'0px',
                        }}>Drink Water</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', 
                        marginBottom:'10px', alignItems:'center', 
                        columnGap:'8px'}}>
                        <input type="radio" />
                        <p style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#080D17",
                            margin:'0px',
                            padding:'0px',
                        }}>5 Minutes work</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', columnGap:'8px', alignItems:'center'}}>                    
                        <input type="radio" />
                        <p style={{
                            fontWeight: "500",
                            fontSize: "14px",
                            color: "#808080",
                            margin:'0px',
                            padding:'0px'
                        }}>Meditate</p>
                    </div>
                    </div>
            </div>
        </div>

        <div className="maindashboard-footer">
            <div className="maindashboard-footer-up">
                <img width="30px" height="25.94px" src={BalloonSrc} />
                <h4>Ai Suggestion</h4>
            </div>
            <div className="maindashboard-footer-down">
                <span>Try a calming breath session this evening</span>
                <img />
                <span>Meditation will help you alot</span>
            </div>

        </div>
    </div>
}