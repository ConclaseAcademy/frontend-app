import Button from "../../../../components/Button/Button";
import "./LogOutPopUp.css";
import { useStore } from "../../../../store/modalstore";
import { useEffect, useRef } from "react";

export default function LogOutPopUp(){
    const logoutRef = useRef(null);

    const toggleLogOutPopUp= useStore((state) => state.toggleLogOutPop);
    const logoutPopState = useStore((state) => state.logoutpopup);

    // closing the popup when clicked on anywhere in the document
    useEffect(() => {
        document.addEventListener('click', (e) => {        
            // if(logoutRef.current && !logoutRef.current.contains(e.target)){
            //     toggleLogOutPop()
            // }

             if (logoutRef.current != e.target) {
                toggleLogOutPopUp(false);
            }
        });

        return document.removeEventListener('click', (e) => {
             if (logoutRef.current != e.target) {
                toggleLogOutPopUp(false);
            }
        });
    }, []) 

    return <div className={`logoutpopup-container ${logoutPopState?'logoutpopup-container-open':''}`}>
        <div ref={logoutRef} className="logoutpopup-content">
            <h3>MindfulSpace says</h3>
            <p>Are you sure you want to log out?</p>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                <div className="logoutpopup-btncontainer">
                    <Button
                        style={{
                            width: "170px",
                            // height: 56;
                            // gap: 10px;
                            borderRadius: "25px",
                            padding: "16px 10px",
                            background: "#854743",
                            border:"0px",
                            fontWeight: "700",
                            fontSize: "16px",
                        }}
                        onClick={() => {
                            toggleLogOutPopUp(false)
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        style={{
                            width: "170px",
                            borderRadius: "25px",
                            padding: "10px",
                            background: "#FFB3AD",
                            border:'0px',
                            fontWeight: "700",
                            fontSize: "16px",
                            color:'#5A1A19'
                        }}
                    >
                        OK
                    </Button>
                </div>
            </div>
        </div>
    </div>
}