import YogaImgSrc from "../../../../assets/images/Yoga.svg";
import ChartImgSrc from "../../../../assets/images/Chart.svg";
import DirectHitImgSrc from "../../../../assets/images/DirectHit.svg";
import GreenBookImgSrc from "../../../../assets/images/GreenBook.svg";
import SmilingEyesImgSrc from "../../../../assets/images/SmilingEyes.svg";
import SpeechBalloonImgSrc from "../../../../assets/images/SpeechBalloon.svg";

export default function EverythingIcon({heading}){
    switch(heading){
        case "Mood Check-In":
            return <img src={SmilingEyesImgSrc} height={50} width={50} alt="mood" />

        case "Smart Journaling":
            return <img src={GreenBookImgSrc} height={50} width={50} alt="journaling" />

        case "Meditation Library":
            return <img src={YogaImgSrc} height={50} width={50} alt="Meditation" />

        case "Habit Tracking":
            return <img src={DirectHitImgSrc} height={50} width={50} alt="Tracking" />

        case "AI Insights":
            return <img src={ChartImgSrc} height={50} width={50} alt="Insight" />

        default:
            return <img src={SpeechBalloonImgSrc} height={50} width={50} alt="Companion" />          
    }
}