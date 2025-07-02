import "./WeeklyProgress.css"
import WeeklyProgressCard from "./WeeklyProgressCard"

export default function WeeklyProgress(){
    return <div className="weeklyprogress-container">
        <h3>Weekly Progress</h3>
        <div className="weeklyprogress-main">
            <div>
                <WeeklyProgressCard />
                <p>You’re 32% feeling happier than last week</p>
            </div>
            <div>
                <WeeklyProgressCard />
                <p>You’re 70% consistent this week.Awesome!</p>
            </div>
            <div>
                <WeeklyProgressCard />
                <p>2-day streak! Keep it going</p>
            </div>
        </div>
    </div>
}