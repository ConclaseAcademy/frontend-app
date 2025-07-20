import HappySrc from "../../assets/happymood.svg";
import NeutralSrc from "../../assets/neutralmood.svg";
import SadSrc from "../../assets/sadmood.svg";
import AnxiousSrc from "../../assets/anxiousmood.svg";
import ExcitedSrc from "../../assets/excitedmood.svg"


export default function EmojiImageMood({name}){
    switch(name){
        case "Happy":
            return <img src={HappySrc} width={76} height={102}/>

        case "Neutral":
            return <img src={NeutralSrc} width={76} height={102} />
            
        case "Sad":
            return <img src={SadSrc} width={76} height={102} />

        case "Anxious":
            return <img src={AnxiousSrc} width={76} height={102} />

        default:
            return <img src={ExcitedSrc} width={76} height={102} />
    }

}