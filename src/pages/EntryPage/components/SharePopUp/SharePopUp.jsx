import { useEffect, useRef, useState } from "react";
import Button from "../../../../components/Button/Button";
import "./SharePopUp.css";
import EmailSrc from "../../assets/date.svg";
import SharePopUpEmail from "./SharePopUpEmail";
import { useStore } from "../../../../store/modalstore";

export default function SharePopUp(){
    const [activeTab, setActiveTab] = useState(0);
    const [urlDemo, setUrlDemo]  = useState(true);
    // const [openDropDown, setOpenDropDown] = 

    // getting the slice of the state
    const toggleShareEntryPop = useStore((state) => state.toggleShareEntryPop);
    const shareEntryPopState = useStore((state) => state.shareentrypopup);

    // ref
    const shareRef = useRef(null);

    // closing the popup when clicked on anywhere in the document
    useEffect(() => {
        document.addEventListener('click', (e) => {        
            if(shareRef.current && !shareRef.current.contains(e.target)){
                toggleShareEntryPop(false)
            }
        });

        return document.removeEventListener('click', (e) => {
            if(shareRef.current && !shareRef.current.contains(e.target)){
                toggleShareEntryPop(false)
            }
        });
    }, [])    

    return <div className={`sharepopup-container ${shareEntryPopState?'sharepopup-container-open':''}`} >
        <div ref={shareRef} className="sharepopup-content">
            <h3>Share Entry</h3>
            <div className="sharepopup-tab">
                <Button
                    style={{
                        borderRadius: "12px",
                        padding: "10px",
                        paddingTop:'18px',
                        paddingBottom:'18px',
                        background:activeTab == 0? "#FFFFFF":"#DCDCDC30",
                        fontWeight: "500",
                        fontStyle: "medium",
                        fontSize: "24px",
                        color:activeTab == 0? "#0E5CF9":'#939393',
                        display:'flex',
                        alignItems:'center',
                        flexDirection:'row',
                        columnGap:'10px',
                        flexGrow:"1",
                        justifyContent:'center',
                        border:'0px'

                    }} 
                    onClick={() => {setActiveTab(0)}} 
                >
                    {activeTab == 0?<img src={EmailSrc} height={24} width={24}/>:
                    <img src={EmailSrc} height={24} width={24}/>}
                    <p style={{margin:'0px', padding:'0px'}}>Email</p>
                </Button>

                <Button
                    style={{
                        borderRadius: "12px",
                        padding: "10px",
                        paddingTop:'18px',
                        paddingBottom:'18px',
                        background:activeTab == 1? "#FFFFFF":"#DCDCDC30",
                        fontWeight: "500",
                        fontStyle: "medium",
                        fontSize: "24px",
                        color:activeTab == 1? "#0E5CF9":'#939393',
                        display:'flex',
                        flexDirection:'row',
                        columnGap:'10px',
                        alignItems:'center',
                        justifyContent:'center',
                        flexGrow:"1",
                        border:'0px'

                    }} 
                    onClick={() => {setActiveTab(1)}} 
                >
                    {activeTab == 1?<img src={EmailSrc} height={24} width={24}/>:
                    <img src={EmailSrc} height={24} width={24}/>}
                    <p style={{margin:"0px", padding:'0px'}}>Public Link</p>
                </Button>
            </div>

           {activeTab == 0? <SharePopUpEmail />:urlDemo?<div className=".sharepopup-tab-1">
            <p>Generate a public link that anyone can access without needing a Mindfulsoace account.</p>
            <Button
                style={{
                    borderRadius: "12px",
                    background: "#040F25", 
                    padding: "16px",
                    fontWeight: "500",
                    // fontStyle: "medium",
                    fontSize: "24px",
                    border:'0px',
                    color: "#FFFFFF",
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    columnGap:'10px',
                    alignItems:'center',
                    justifyContent:'center'
                }} 
                onClick={() =>  {setUrlDemo(prev => !prev)}}>
                    <img src={EmailSrc} width={24} height={24} />
                    <p style={{margin:"0px", padding:'0px'}}>Send Email</p>
                </Button>
            </div>:<div className="sharepopup-urlgenerate">
                <p>https://mindfulmind.com/public/entry/32ptoo3emua</p>
                <Button
                style={{
                    borderRadius: "12px",
                    background: "#FFFFFF", 
                    padding: "16px ",
                    fontWeight: "500",
                    // fontStyle: "medium",
                    fontSize: "24px",
                    
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    columnGap:'10px',
                    alignItems:'center',
                    justifyContent:'center',
                    border: "3px solid #0E5CF9"
                }} 
                onClick={() => {setUrlDemo(prev => !prev)}}>
                    <img src={EmailSrc} width={24} height={24} />
                    <p style={{margin:"0px", padding:'0px', color: "#0E5CF9"}}>Send Email</p>
                </Button>
            </div>
           }
        </div>
    </div>
}