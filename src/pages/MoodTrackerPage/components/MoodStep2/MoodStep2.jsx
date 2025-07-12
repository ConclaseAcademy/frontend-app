import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import "./MoodStep2.css";
import Button from "../../../../components/Button/Button";
import ArrowUpSrc from "../../assets/arrowup.svg";

export default function MoodStep2({value, onChange, onClick}){
    return <div className="moodstep2-container">
            <h1>Select a Date</h1>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'51px'}}>
                <Calendar
                    prevLabel={null}
                    nextLabel={null}
                    prev2Label={null}
                    next2Label={null}
                    showNeighboringMonth={false}
                    value={value}
                    onChange={onChange}
                 />
            </div>
            <p>
                Identify thought patterns and visualise your progress by tracking daily
            </p>
            <Button style={{
                fontWeight: "600",
                fontStyle: "SemiBold",
                fontSize: "16px",
                borderRadius: "50px",
                paddingTop: "12px",
                paddingRight: "24px",
                paddingBottom: "12px",
                paddingLeft: "24px",
                background: "#1A3467",
                border: "2px solid #FFFFFF",
                display:'flex',
                flexDirection:'row',
                columnGap:'10px',
                alignItems:'center',
                width:'185px',
                marginTop:'28px',

            }}
            onClick={onClick}
            >
                <p style={{padding:'0px', margin:'0px', 
                    color: "#FFFFE3"
                    }}>Get started</p>
                <img src={ArrowUpSrc} width={24} height={24} />
            </Button>
        </div>
}