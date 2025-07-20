import "./MoodStep1.css";
import dayjs from "dayjs";
import imgSrc from "../../assets/moodstep1card.svg";
import nextBtnStep1Src from "../../assets/step1nextbtn.svg"

const daysOfWeek = [
    {
        day:"Sun",
        name:'S'
    },{
        day:"Mon",
        name:'M'
    },{
        day:"Tue",
        name:'T'
    },{
        day:"Wed",
        name:'W'
    },{
        day:"Thu",
        name:'T'
    },{
        day:"Fri",
        name:'F'
    },{
        day:"Sat",
        name:'S'
    }, 
]
export default function MoodStep1({onClick}){
    const today = dayjs().format("ddd");
    // console.log("get today: ", typeof today);

    return <div className="moodstep1-container">
            <div className="moodstep1-next-btn" onClick={onClick}>
                <img src={nextBtnStep1Src} width={62} height={48} />
            </div>
            <h3>Today</h3>
            <div className="moodstep1-visual-cont">
                {daysOfWeek.map(day => {
                    return <div key={day.day} className="moodstep1-visual-cont-span">
                        <label className={today == day.day?"moodstep1-visual-today-label":""}>{day.name}</label>
                        <div className={today == day.day?"moodstep1-visual-today-div":""}></div>
                    </div>
                })}
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'37px'}}>
                <div className="moodstep1-card">
                    <img src={imgSrc} style={{width:'100%'}} />
                    <div style={{paddingLeft:'20px', paddingRight:'20px'}}>
                        <h4>Daily</h4>
                        <p>Get your personalized insights and advice</p>
                    </div>
                </div>
            </div>
    </div>
}