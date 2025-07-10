import Button from "../../../../components/Button/Button";
import "./MeditationDisplay.css";

export default function MeditationDisplay({onClick}){
    return <div className="meditationdisplay-container">
            <p>No meditations found matching your filters.</p>
            <Button

            style={{
                borderRadius: "16px",
                borderWidth:"1px",
                padding: "31.5px 58px",
                background: "#FFFFFF",
                border: "1px solid #858585",
                fontWeight: "600",
                fontStyle: "SemiBold",
                fontSize: "28px",
                textAlign: "center",
                color: "#000000"

            }}  
            
            onClick={onClick}>
                Clear filters
            </Button>
        </div>
}