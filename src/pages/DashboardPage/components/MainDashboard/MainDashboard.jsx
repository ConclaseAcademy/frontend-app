import JournalAnalysis from "../JournalAnalysis/JournalAnalysis";
import WeekInsights from "../WeekInsights/WeekInsights";
import "./MainDashboard.css";
import MainDashboardCard from "./MainDashboardCard";
import BalloonSrc from "../../assets/dashballoon.svg";
import WeeklyProgress from "../WeeklyProgress/WeeklyProgress";
import TodayHabitsSrc from "../../assets/dashdirecthit.svg";
import DashboardNavigation from "../DashboardNavigation/DashboardNavigation"

// fetching from an Api
const mainDashCardData = [
    {
        id:0,
        label:"Current Mood",
        desc:"Last Logged 'Anxious'",
        time:"2 hours ago",
        btn:'Check in',
        color:"",
        btnColor:"#1855CF"
    },
    {
        id:1,
        label:"Journal",
        desc:"Last entry 2 days ago",
        time:"Streak 2 days",
        btn:'Write',
        timeColor:"#319F43",
        btnColor:"#9B65F2"
    },
    {
        id:2,
        label:"Meditation",
        desc:"Today's session: 10 min",
        time:"Calm...Focus...Sleep",
        btn:'Meditation',
        timeColor:"#E35712",
        btnColor:"#00AC0E"
    }
]

export default function MainDashboard(){
    return <div className="maindashboard-container">
        <DashboardNavigation />
        <p style={{marginBottom:'8px'}}>Welcome back, Alex</p>
        <p style={{marginBottom:'20px'}}>Let's check in on your mind today</p>
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
                <div style={{display:'flex', flexDirection:'row'}}>
                    <img src={TodayHabitsSrc} />
                    <h3>Today’s Habits</h3>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <input type="radio" />
                    <p>Drink Water</p>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <input type="radio" />
                    <p>5 Minutes work</p>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>                    
                    <input type="radio" />
                    <p>Meditate</p>
                </div>
            </div>
        </div>

        <div className="maindashboard-footer">
            <div className="maindashboard-footer-up">
                <img width="30px" height="25.94px" src={BalloonSrc} />
                <h4>Ai Suggestion</h4>
            </div>
            <div>
                <span>Try a calming breath session this evening</span>
                <img />
                <span>Meditation will help you alot</span>
            </div>

        </div>
    </div>
}