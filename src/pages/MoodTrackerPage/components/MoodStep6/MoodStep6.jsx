import "./MoodStep6.css";
import dayjs from "dayjs";
import smileSrc from "../../assets/smile.svg";
import outlineSrc from "../../assets/outline.svg"
import girlSrc from "../../assets/girl.svg";
import homeSrc from "../../assets/home1.svg";
import tired2Src from "../../assets/tired2.svg";
import gratefulSrc from "../../assets/grateful.svg";
import Button from "../../../../components/Button/Button";

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
export default function MoodStep6({onClick}){
    const today = dayjs().format("ddd");
    // console.log("get today: ", typeof today);

    return <div className="moodstep6-container">
            <h3>Today</h3>
            <div className="moodstep6-visual-cont">
                {daysOfWeek.map(day => {
                    return <div key={day.day} className="moodstep6-visual-cont-span">
                        <label className={today == day.day?"moodstep6-visual-today-label":""}>{day.name}</label>
                        <div className={today == day.day?"moodstep6-visual-today-div":""}></div>
                    </div>
                })}
            </div>
            <h4>Daily Bloom</h4>
            <div className="moodstep6-mid1">
                <div className="moodstep6-mid1-span">
                    <img src={gratefulSrc} width={40} height={40} />
                    <p>grateful</p>
                </div>
                <div className="moodstep6-mid1-span">
                    <img src={homeSrc} width={40} height={40} />
                    <p>home</p>
                </div>
            </div>
            <div className="moodstep6-mid1">
                <div className="moodstep6-mid1-span">
                    <img src={tired2Src} width={40} height={40} />
                    <p>50 words</p>
                </div>
            </div>
            <Button
            style={{
                // width: 136;
                // height: 40;
                borderRadius: "15px",
                padding: "10px",
                border: "1px solid #979292",
                fontWeight: "400",
                fontStyle: "normal",
                fontSize: "16px",
                textAlign: "center",
                color: "#000000",
                marginTop:'21px'

            }}
            >
                Updating tracking
            </Button>

            <div className="moodstep6-program">
                <h4>Your Program</h4>
                <div className="moodstep6-program-card">
                    <img src={girlSrc} width={68} height={71} />
                    <div>
                        <p className="moodstep6-program-card-title">Overcome Self-criticisms: Day 1 of 7</p>
                        <div className="moodstep6-program-card-detail">
                            <img src={outlineSrc} width={24} height={24} />
                            <p>Improving Mindful Awareness</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
}