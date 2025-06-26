import "./Testimonies.css";
import TestimoniesCard from "./TestimoniesCard";

const testimoniesData = [
    {
        id:0,
        name:"Sarah L.",
        role:"Marketing Manager, 29",
        country:'Nairobi,Kenya',
        desc:"I've tried countless apps for my anxiety, but MindfulSpace stands out. "
    },
    {
        id:1,
        name:"David M",
        role:"Construction Manager 35",
        country:'Lagos,Nigeria',
        desc:"Mood tracking showed me my anxiety was tied to sleep and work stress. "
    },
    {
        id:2,
        name:"Ann P.",
        role:"Teacher, 50",
        country:'Caprown,SouthAfrica',
        desc:"After 3 months of daily check-ins and journaling, I’ve had fewer panic attacks  "
    },

]


export default function Testimonies(){
    return <div className="testimonies-container">
         <h3>What Our Users Say</h3>
         <p>Real stories from people transforming their mental wellness journey</p>
         <div className="testimonies-map">
            {testimoniesData.map(item => (<TestimoniesCard key={item.id} {...item} />))}
         </div>
    </div>
}