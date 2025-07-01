import HomeSrc from "../../assets/home.svg"
import MoodSrc from "../../assets/dashsmile.svg";
import JournalSrc from "../../assets/dashbook.svg";
import InsightsSrc from "../../assets/dashinsights.svg";
import HabitsSrc from "../../assets/dashhealth.svg"
import AiSrc from "../../assets/dashmessage.svg";

export default function SidebarDashboardIcon({id}){
    console.log("fkjkf: ", id)
    switch(id){
        case 0:
            return <img src={HomeSrc} />

        case 1:
            return <img src={MoodSrc} />

        case 2:
            return <img src={JournalSrc} />

        case 3:
            return <img src={InsightsSrc} />

        case 4:
            return <img src={HabitsSrc} />

        default:
            return <img src={AiSrc} />

    }
}