import "./MeditationCardTab2Item.css";
import Button from "../../../../components/Button/Button";
import PlaySrc from "../../assets/play.svg";
import DownloadSrc from "../../assets/downlaod.svg";
import TimeSrc from "../../assets/clock.svg";
import MeditationCardTab2ItemIcons from "./MeditationCardTab2ItemIcons";

export default function MeditationCardTab2Item({title, desc, author, span, time}){
    return <div className="meditationcardtab2item-container">
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'18px'}}>
            <MeditationCardTab2ItemIcons title={title} />
        </div>
        <h4>{title}</h4>
        <p className="meditationcardtab2item-desc">{desc}</p>
        <p className="meditationcardtab2item-author">by {author}</p>
        <div className="meditationcardtab2item-time">
            <img src={TimeSrc} height={24} width={24} />
            <p>{time} minutes</p>
        </div>
        <div className="meditationcardtab2item-span">
            <p>{span}</p>
        </div>
        <div style={{display:'flex', flexDirection:'row', columnGap:'10px', alignItems:'center'}}>
            <Button style={{
                borderRadius: "16px",
                padding: "16px",
                background: "#080D17",
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                flexGrow:'1'


            }}>
                <img src={PlaySrc} height={24} width={24} />
                <p style={{padding:'0px', margin:'0px'}}>Play</p>
            </Button>
            <Button
            style={{
                padding:'8px',
                borderRadius: "10px",
                borderWidth: "1px",
                border: "1px solid #929090",
                width:'48px'
            }}
            >
                <img src={DownloadSrc} width={32} height={32}/>
            </Button>
        </div>
    </div>
}