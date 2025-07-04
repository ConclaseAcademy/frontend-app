import "./SidebarEntry.css";
import Button from "../../../../components/Button/Button";
import closeSrc from "../../assets/closeimg.svg";
import plusSrc from "../../assets/plus.svg";
import starSrc from "../../assets/star.svg";
import listSrc from "../../assets/list.svg";
import { useStore } from "../../../../store/modalstore";

export default function SidebarEntry(){
    
    // getting the slice of the state in 
    const toggleSideBarNav = useStore((state) => state.sideBarNav);

    return <div className="sidebarentry-container">
        <div className="sidebarentry-title">
            <h3>Alex’s Journal</h3>
            <img src={closeSrc} height={30}
            onClick={() => {toggleSideBarNav()}}
            width={30} alt="close" />
        </div>
            <input type="text" placeholder="Search Journal" />
            <Button style={{
                paddingTop: "16px",
                paddingRight: "24px",
                paddingBottom: "16px",
                paddingLeft: "24px",
                borderRadius: "16px",
                background: "#8DA3FDB5",
                display:'flex',
                flexDirection:'row',
                columnGap:'15px',
                fontWeight: "500",
                fontSize: "16px",
                color: "#FFFFFF",
                alignItems:'center',
                border:"0px",
                width:'100%',
                marginBottom:'30.5px'
            }}>
                <img src={plusSrc} alt="btn" width={30} height={30} />
                <p style={{margin:'0px', padding:'0px'}}>New Entry</p>
            </Button>
            <div className="sidebarentry-clickable">
                <img src={listSrc} height={30} width={30} alt="list" />
                <p>View all Entries</p>
            </div>

            <div className="sidebarentry-clickable">
                <img src={starSrc} width={30} height={30} alt="list" />
                <p>View Starred Entries</p>
            </div>

            <div className="sidebarentry-clickable-2">
                <h4>Recent Activities</h4>
                <p>Why I’m Writing..</p>
                <p>Fri.6/27/2025</p>
            </div>
    </div>
}