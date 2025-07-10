import "./MeditationCategoryCard.css";

export default function MeditationCategoryCard({name, count, active, onClick}){
    // ${active? 'meditationcategorycard-content-active' :''}
    return <div className={`meditationcategorycard-content 
    ${active == name? 'meditationcategorycard-content-active' :''}`}
    onClick={onClick}>
            <span>{name}</span>
            {count?<span>({count})</span>:null}
        </div>
}