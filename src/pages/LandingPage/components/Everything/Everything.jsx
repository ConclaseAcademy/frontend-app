import "./Everything.css";
import EverythingCard from "./EverythingCard";
import { EverythingData } from "./EverythingData";


export default function Everything(){
    return <div className="everything-container">
        <h2>Everything You Need for Mental Wellness</h2>
        <div>
            {EverythingData.map(item => {
                return <EverythingCard key={item.id} {...item} />
            })}
        </div>
    </div>
}