import Button from "../../../../components/Button/Button";
import EmojiImageFeeling from "./EmojiImageFeeling";
// import EmojiImageMood from "./EmojiImageMood";
import "./MoodStep4.css";

const moodEmojis = [
    {
        id:0,
        name:"angry",
        value:'angry'
    },
        {
        id:1,
        name:"grateful",
        value:'grateful'
    },    {
        id:2,
        name:"smile",
        value:'smile'
    },    {
        id:3,
        name:"anxious",
        value:'anxious'
    },    {
        id:4,
        name:"not sure",
        value:'not sure'
    }, {
        id:5,
        name:"frown",
        value:'frown'
    },  {
        id:6,
        name:"motivated",
        value:'motivated'
    },  {
        id:7,
        name:"tired",
        value:'tired'
    },  {
        id:8,
        name:"sad",
        value:'sad'
    },  {
        id:9,
        name:"stressed",
        value:'stressed'
    },   {
        id:10,
        name:"confused",
        value:'confused'
    }
]

export default function MoodStep4({onClick}){
    return <div className="moodstep4-container">

        <h4>What emotion best describes how you feel right now?</h4>
        <div>
            <div className="moodstep4-emoji-cont">
                <h5>Emotions</h5>
                <div className="moodstep4-emoji">
                    {moodEmojis.map(emoji => {
                        return <EmojiImageFeeling key={emoji.id} {...emoji} />
                    })}
                </div>
            </div>            
            <Button
                onClick={onClick}
                style={{

                    // width: 348;
                    // height: 56;
                    border: "2px solid border",
                    borderRadius: "50px",
                    paddingTop: "16px",
                    paddingRight: "24px",
                    paddingBottom: "16px",
                    paddingLeft: "24px",
                    background: "#1A3467",
                    fontWeight: "600",
                    fontStyle: "semibold",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "#FFFFE3",
                    marginTop:'56px',
                    // width:'440px'
                    width:'100%'

                }}
                >
                    Continue
                </Button>
        </div>
    </div>
}