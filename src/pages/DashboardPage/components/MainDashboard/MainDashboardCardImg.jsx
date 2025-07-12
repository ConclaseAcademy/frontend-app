import SmileyFaceSrc from "../../assets/smileyfacedash.svg";
import MeditateSrc from "../../assets/meditatedash.svg";
import JournalSrc from "../../assets/journaldash.svg";

export default function MainDashboardCardImg({label}){
    switch(label){
        case "Current Mood":
            return <img src={SmileyFaceSrc} height={30} width={30} />;

        case "Journal":
            return <img src={JournalSrc} height={30} width={30} />

        default:
            return <img src={MeditateSrc} height={30} width={30} />

    }
}