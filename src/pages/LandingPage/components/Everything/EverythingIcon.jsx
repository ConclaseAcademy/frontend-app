import YogaImgSrc from "./assets/Yoga.svg";
import ChartImgSrc from "./assets/Chart.svg";
import DirectHitImgSrc from "./assets/DirectHit.svg";
import GreenBookImgSrc from "./assets/GreenBook.svg";
import SmilingEyesImgSrc from "./assets/SmilingEyes.svg";
import SpeechBalloonImgSrc from "./assets/SpeechBalloon.svg";

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