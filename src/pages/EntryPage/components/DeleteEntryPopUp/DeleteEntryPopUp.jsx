import Button from "../../../../components/Button/Button";
import "./DeleteEntryPopUp.css";
import { useStore } from "../../../../store/modalstore";

export default function DeleteEntryPopUp(){
    const toggleDeleteEntryPopUp = useStore((state) => state.toggleDeleteEntryPop);

    return <div className="deleteentrypopup-container">
        <div className="deleteentrypopup-content">
            <h3>MindfulSpace says</h3>
            <p>Are you sure you want to delete this entry?</p>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                <div style={{display:'flex', flexDirection:'row', columnGap:'16px',}}>
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
                            marginLeft:'153px'
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