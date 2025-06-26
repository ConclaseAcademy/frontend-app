import "./TestimoniesCard.css";
import TestimoniesImage from "./TestimoniesImage";

export default function TestimoniesCard({id, name, role, country, desc}){
    return <div className="testimoniescard-container">
        <div className="testimoniescard-content">
            <TestimoniesImage id={id}  />
            <h5>{name}</h5>
            <h5>{role}</h5>
            <h6>{country}</h6>
        </div>
        <p className="testimonies-hover">{desc}</p>
    </div>
}