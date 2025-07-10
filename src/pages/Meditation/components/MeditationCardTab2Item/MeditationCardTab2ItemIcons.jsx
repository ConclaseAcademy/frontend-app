import moonSrc from "../../assets//moontab2.svg";
import loveSrc from "../../assets/lovetab2.svg";


export default function MeditationCardTab2ItemIcons({title}){
    switch(title){
        case 'Moonlit Forest Journey':
            return <img src={moonSrc} height={80} width={80}/>
        
        case 'The Sleepy Village':
            return <img src={loveSrc} height={80} width={80}/>
          
        case 'Narrated by James Mitchell':
            return <img src={loveSrc} height={80} width={80}/>
        
        case 'The Garden of Dreams':
            return <img src={moonSrc} height={80} width={80}/> 

        case 'Mountain Lake Serenity':
            return <img src={moonSrc} height={80} width={80}/>
        
        default:
            return <img src={moonSrc} height={80} width={80}/>
    }
}
//    {
//         id:5,
//         title:'Moonlit Forest Journey',
//         desc:'Wander through a peaceful forest',
//         author:'Emma Thompson',
//         span:'Poetry',
//         time:15,
//         category:'Nature'
//     }
