import "./MoodTrackerUser.css";
import userSrc from "../../assets/mooduser.svg";
import notificationSrc from "../../assets/moodnotification.svg";

export default function MoodTrackerUser(){
    return <div className="moodtrackeruser-container">
                <div className="moodtrackeruser-content">
                    <img src={userSrc} height={40} width={40} />
                    <p>Hi! Adams</p>
                    <img src={notificationSrc} height={24} width={24}/>

                </div>
            </div>
}