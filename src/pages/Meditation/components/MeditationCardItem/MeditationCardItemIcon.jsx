import MorningSrc from "../../assets//morning.svg";
import StressSrc from "../../assets/stress.svg";
import DeepSrc from "../../assets/deep.svg";
import AnxietySrc from "../../assets/anxiety.svg";
import FocusSrc from "../../assets/focus.svg";
import EveningSrc from "../../assets/evening.svg";


export default function MeditationCardItemIcon({title}){
    switch(title){
        case 'Morning Mindfulness':
            return <img src={MorningSrc} height={80} width={80}/>
        
        case 'Stress Relief Meditation':
            return <img src={StressSrc} height={80} width={80}/>
          
        case 'Deep Sleep Journey':
            return <img src={DeepSrc} height={80} width={80}/>
        
        case 'Anxiety Calming Session':
            return <img src={AnxietySrc} height={80} width={80}/> 

        case 'Focus Enhancement':
            return <img src={FocusSrc} height={80} width={80}/>
        
        default:
            return <img src={EveningSrc} height={80} width={80}/>
    }
}