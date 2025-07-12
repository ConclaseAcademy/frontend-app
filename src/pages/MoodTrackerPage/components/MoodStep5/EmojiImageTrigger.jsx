import MyselfSrc from "../../assets/myself.svg";
import WorkSrc from "../../assets/work.svg";
import RelationshipSrc from "../../assets/relationship.svg";
import FamilySrc from "../../assets/family.svg";
import FriendsSrc from "../../assets/friends.svg";
import SleepSrc from "../../assets/sleep.svg"
import HealthSrc from "../../assets/health.svg"
import FoodSrc from "../../assets/food.svg"
import ExerciseSrc from "../../assets/exercise.svg"
import FinancesSrc from "../../assets/finnaces.svg"
import HobbiesSrc from "../../assets/hobbies.svg";
import HomeSrc from "../../assets/home (1).svg";
import "./EmojiImageTrigger.css";


export default function EmojiImageFeeling({name}){
    let UI;

    switch(name){
        case "myself":
            UI = <img src={MyselfSrc} width={50} height={50}/>

        case "work":
            UI = <img src={WorkSrc} width={50} height={50} />
            
        case "relationship":
            UI = <img src={RelationshipSrc} width={50} height={50} />

        case "family":
            UI = <img src={FamilySrc} width={50} height={50} />

        case "friends":
            UI = <img src={FriendsSrc} width={50} height={50} />
            
        case "sleep":
            UI = <img src={SleepSrc} width={50} height={50} />
            
        case "health":
            UI = <img src={HealthSrc} width={50} height={50} />
            
        case "food":
            UI = <img src={FoodSrc} width={50} height={50} />
            
        case "exercise":
            UI = <img src={ExerciseSrc} width={50} height={50} />

        case "finances":
            UI = <img src={FinancesSrc} width={50} height={50} />
            
        case "hobbies":
            UI = <img src={HobbiesSrc} width={50} height={50} />

        default:
            UI = <img src={HomeSrc} width={50} height={50} />
    }

    return <div className="emojiimagetrigger-container">
                {UI}
                <p>{name}</p>
            </div>

}
