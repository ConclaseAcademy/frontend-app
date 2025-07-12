import "./MeditationCardItem.css";
import Button from "../../../../components/Button/Button";
import MeditationCardItemIcon from "./MeditationCardItemIcon";
import PlaySrc from "../../assets/play.svg";
import DownloadSrc from "../../assets/downlaod.svg";
import TimeSrc from "../../assets/clock.svg";

export default function MeditationCardItem({title, desc, author, time}){
    return <div className="meditationcarditem-container">
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'18px'}}>
            <MeditationCardItemIcon title={title} />
        </div>
        <h4>{title}</h4>
        <p className="meditationcarditem-desc">{desc}</p>
        <p className="meditationcarditem-author">by {author}</p>
        <div className="meditationcarditem-time">
            <img src={TimeSrc} height={24} width={24} />
            <p>{time} minutes</p>
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