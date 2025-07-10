import "./Tab2CategoryCard.css";

export default function Tab2CategoryCard({name, count, active, onClick}){
    return <div className={`tab2categorycard-content 
    ${active == name? 'tab2categorycard-content-active' :''}`}
    onClick={onClick}>
            <span>{name}</span>
            {count?<span>({count})</span>:null}
        </div>
}