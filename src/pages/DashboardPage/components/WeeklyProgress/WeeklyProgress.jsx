import "./WeeklyProgress.css"
import WeeklyProgressCard1 from "./WeeklyProgressCard1"
import WeeklyProgressCard2 from "./WeeklyProgressCard2"

export default function WeeklyProgress(){
    return <div className="weeklyprogress-container">
        <h3>Weekly Progress</h3>
        <div className="weeklyprogress-main">
            <div style={{width:"185px"}}>
                <WeeklyProgressCard1 />
                <p>You’re 32% feeling happier than last week</p>
            </div>
            <div style={{width:"185px"}}>
                <WeeklyProgressCard2 />
                <p>You’re 70% consistent this week.Awesome!</p>
            </div>
            <div style={{width:"185px"}}>
                <WeeklyProgressCard1 />
                <p>2-day streak! Keep it going</p>
            </div>
        </div>
    </div>
}