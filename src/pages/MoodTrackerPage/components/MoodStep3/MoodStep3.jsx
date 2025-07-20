import Button from "../../../../components/Button/Button";
import EmojiImageMood from "./EmojiImageMood";
import "./MoodStep3.css";

const moodEmojis = [
    {
        id:0,
        name:"Happy",
        value:'happy'
    },
        {
        id:1,
        name:"Neutral",
        value:'neutral'
    },    {
        id:2,
        name:"Sad",
        value:'sad'
    },    {
        id:3,
        name:"Anxious",
        value:'anxious'
    },    {
        id:4,
        name:"Excited",
        value:'exited'
    },  
]

export default function MoodStep3({onClick}){
    return <div className="moodstep3-container">

        <h3>How are you feeling today?</h3>
        <p>Select the emoji that best represents your current mood</p>
        <div className="moodstep3-emoji">
            {moodEmojis.map(emoji => {
                return <EmojiImageMood key={emoji.id} {...emoji} />
            })}
        </div>
        {/* <div> */}
            <Button
            onClick={onClick}
            style={{
                // width: "130px";
                // height: 66;
                borderRadius: "12px",
                paddingTop: "21px",
                paddingRight: "41px",
                paddingBottom: "21px",
                paddingLeft: "41px",
                background: "#1A3467",
                fontWeight: "700",
                fontStyle: "bold",
                fontSize: "20px",
                textAlign: "center",
                color: "#F0EFEB",
                position:'absolute',
                right:'5%',
                bottom:'-30%'
            }}
            >
                Next
            </Button>
        {/* </div> */}
    </div>
}