import AngrySrc from "../../assets/angry.svg";
import GratefulSrc from "../../assets/grateful.svg";
import SmileSrc from "../../assets/smile.svg";
import AnxiousSrc from "../../assets/anxious.svg";
import NotSureSrc from "../../assets/not sure.svg";
import FrownSrc from "../../assets/frown.svg"
import MotivatedSrc from "../../assets/motivated.svg"
import TiredSrc from "../../assets/tired.svg"
import SadSrc from "../../assets/sadd.svg"
import StressedSrc from "../../assets/stressed.svg"
import UnmusedSrc from "../../assets/unmused.svg";
import "./EmojiImageFeeling.css";


export default function EmojiImageFeeling({name}){
    let UI;

    switch(name){
        case "angry":
            UI = <img src={AngrySrc} width={50} height={50}/>

        case "grateful":
            UI = <img src={GratefulSrc} width={50} height={50} />
            
        case "smile":
            UI = <img src={SmileSrc} width={50} height={50} />

        case "anxious":
            UI = <img src={AnxiousSrc} width={50} height={50} />

        case "not sure":
            UI = <img src={NotSureSrc} width={50} height={50} />
            
        case "frown":
            UI = <img src={FrownSrc} width={50} height={50} />
            
        case "motivated":
            UI = <img src={MotivatedSrc} width={50} height={50} />
            
        case "tired":
            UI = <img src={TiredSrc} width={50} height={50} />
            
        case "sad":
            UI = <img src={SadSrc} width={50} height={50} />

        case "stressed":
            UI = <img src={StressedSrc} width={50} height={50} />

        default:
            UI = <img src={UnmusedSrc} width={50} height={50} />
    }

    return <div className="emojiimagefeeling-container">
                {UI}
                <p>{name}</p>
            </div>

}
