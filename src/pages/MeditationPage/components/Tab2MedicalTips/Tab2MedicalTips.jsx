import "./Tab2MedicalTips.css";
import MoonTipsSrc from "../../assets/moontips.svg";

export default function Tab2MedicalTips(){
    return <div className="tab2medicaltips-container">
        <div>
            <img src={MoonTipsSrc} />
            <h3>Better Sleep Tips</h3>
        </div>
        <ul>
            <li>Create a cool, dark, and quiet sleep environment</li>
            <li>Establish a consistent bedtime routine</li>
            <li>Avoid screens for at least 1 hour before bed</li>
            <li>Listen to sleep stories with comfortable headphones</li>
            <li>Practice deep breathing while listening</li>
        </ul>
    </div>
}