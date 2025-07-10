import Button from "../../../../components/Button/Button";
import "./DeleteEntryPopUp.css";
import { useStore } from "../../../../store/modalstore";
import { useEffect, useRef } from "react";

export default function DeleteEntryPopUp(){
    const toggleDeleteEntryPopUp = useStore((state) => state.toggleDeleteEntryPop);
    const deleteEntryPopState = useStore((state) => state.deleteentrypopup);

    //   ref
    const deleteRef = useRef(null);

    // closing the popup when clicked on anywhere in the document
    useEffect(() => {       
          document.addEventListener('click', (e) => {        
            // if(logoutRef.current && !logoutRef.current.contains(e.target)){
            //     toggleLogOutPop()
            // }

             if (deleteRef.current != e.target) {
                toggleDeleteEntryPopUp(false);
            }
        });

        return document.removeEventListener('click', (e) => {
             if (deleteRef.current != e.target) {
                toggleDeleteEntryPopUp(false);
            }
        });
    }, [])    

    return <div className={`deleteentrypopup-container ${deleteEntryPopState?'deleteentrypopup-container-open':''}`}>
        <div ref={deleteRef} className="deleteentrypopup-content">
            <h3>MindfulSpace says</h3>
            <p>Are you sure you want to delete this entry?</p>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                <div className="deleteentrypopup-btncontainer">
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
                            toggleDeleteEntryPopUp()
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