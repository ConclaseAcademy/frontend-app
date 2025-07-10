import "./MeditationTab3.css";
import BreathingSrc from "../../assets/breathing.svg"
import Button from "../../../../components/Button/Button";

export default function MeditationTab3(){
    return <div className="meditationtab3-container">
        <h3>Breathwork Tools</h3>
        <p>Guided breathing exercises for relaxation and focus</p>
        <img src={BreathingSrc} />
        <div>
            <h4>4-7-8 Breathing</h4>
            <p>Inhale for 4, hold for 7, exhale for 8</p>
        </div>
        <Button
            style={{
                borderRadius: "12px",
                padding: "27.5px 133px",
                background: "#0E5CF9",
                fontWeight: "500",
                // font-style: Medium;
                fontSize: "20px",
                textAlign: "center",
                color: "#FFFFFF"
            }}
        >
            Start Breathing
        </Button>
        <div className="meditationtab3-tips">
            <h3>How to Practice</h3>
            <ol>
                <li>Find a comfortable seated position with your back straight</li>
                <li>Place one hand on your chest and one on your belly</li>
                <li>Focus on breathing deeply from your diaphragm</li>
                <li>Follow the visual guide and breathing prompts</li>
                <li>Try to complete at least 5-10 cycles for best results</li>
            </ol>            
        </div>
    </div>
}