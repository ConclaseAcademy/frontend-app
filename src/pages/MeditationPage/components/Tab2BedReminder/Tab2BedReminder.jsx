import Button from "../../../../components/Button/Button";
import "./Tab2BedReminder.css";
import moonSrc from "../../assets/moon.svg";

export default function Tab2BedReminder(){
    return <div className="tab2bedreminder-container">
            <div style={{display:'flex', flexDirection:'row', columnGap:'16px', alignItems:'center', marginBottom:'14px'}}>
                <img src={moonSrc} />
                <h4>Bedtime Reminder</h4>
            </div>
            <p>Create a consistent sleep schedule for better rest. We can remind you when it's time to wind down.</p>
            <Button 
                style={{
                    borderRadius: "12px",
                    padding: "16px",
                    background: "#FFFFFF",
                    fontWeight: "700",
                    fontStyle: "bold",
                    fontSize: "20px",
                    textAlign: "center",
                    color: "#080D17"


                }}
            >
                Set Bedtime Reminder
            </Button>
    </div>
}