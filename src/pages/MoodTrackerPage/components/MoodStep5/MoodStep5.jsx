import Button from "../../../../components/Button/Button";
import EmojiImageTrigger from "./EmojiImageTrigger";
import "./MoodStep5.css";

const triggerEmojis = [
    {
        id:0,
        name:"myself",
        value:'myself'
    },
        {
        id:1,
        name:"work",
        value:'work'
    },    {
        id:2,
        name:"relationship",
        value:'relationship'
    },    {
        id:3,
        name:"family",
        value:'family'
    },    {
        id:4,
        name:"friends",
        value:'friends'
    }, {
        id:5,
        name:"sleep",
        value:'sleep'
    },  {
        id:6,
        name:"health",
        value:'health'
    },  {
        id:7,
        name:"food",
        value:'food'
    },  {
        id:8,
        name:"exercise",
        value:'exercise'
    },  {
        id:9,
        name:"finances",
        value:'finances'
    },   {
        id:10,
        name:"hobbies",
        value:'hobbies'
    },  {
        id:11,
        name:"home",
        value:'home'
    }
]

export default function MoodStep5({onClick}){
    return <div className="moodstep5-container">

        <h4>What do you think triggered this feeling?</h4>
        <div>
            <div className="moodstep5-emoji-cont">
                <h5>Triggers</h5>
                <div className="moodstep5-emoji">
                    {triggerEmojis.map(emoji => {
                        return <EmojiImageTrigger key={emoji.id} {...emoji} />
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
                    Apply
                </Button>
        </div>
    </div>
}