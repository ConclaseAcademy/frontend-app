import Button from "../../../../components/Button/Button";
import "./LogOutPopUp.css";
import { useStore } from "../../../../store/modalstore";

export default function LogOutPopUp(){
    const toggleLogOutPop = useStore((state) => state.toggleLogOutPop);

    return <div className="logoutpopup-container">
        <div className="logoutpopup-content">
            <h3>MindfulSpace says</h3>
            <p>Are you sure you want to log out?</p>
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
                            toggleLogOutPop()
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