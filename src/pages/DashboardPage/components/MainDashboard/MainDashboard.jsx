import "./MainDashboard.css";
import MainDashboardCard from "./MainDashboardCard";

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
        <p style={{marginBottom:'8px'}}>Welcome back, Alex</p>
        <p style={{marginBottom:'20px'}}>Let's check in on your mind today</p>
        <div className="maindashboard-status">
            {mainDashCardData.map(item => <MainDashboardCard key={item.id} {...item} />)}
        </div>


    </div>
}