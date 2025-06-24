import "./EverythingCard.css"
import EverythingIcon from "./EverythingIcon"

export default function EverythingCard({heading, description}){
    return <div className="everythingcard-container">
        <EverythingIcon heading={heading} />
        <h3>{heading}</h3>
        <p>{description}</p>
    </div>
}