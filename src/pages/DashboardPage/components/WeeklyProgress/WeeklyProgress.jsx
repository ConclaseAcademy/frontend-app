import "./WeeklyProgress.css"
import WeeklyProgressCard from "./WeeklyProgressCard"

export default function WeeklyProgress(){
    return <div className="weeklyprogress-container">
        <h3>Weekly Progress</h3>
        <div className="weeklyprogress-main">
            <WeeklyProgressCard />
            <WeeklyProgressCard />
            <WeeklyProgressCard />
        </div>
    </div>
}