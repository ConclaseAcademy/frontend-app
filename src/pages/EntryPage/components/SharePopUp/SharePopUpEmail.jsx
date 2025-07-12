import Button from "../../../../components/Button/Button";
import "./SharePopUp.css";

export default function SharePopUpEmail(){
    return <>
         <div className="sharepopup-formcontrol">
                <label>Recipient Email Address</label>
                <input type="text" placeholder="Enter email address" />
            </div>

            <div className="sharepopup-formcontrol">
                <label>Message (optional)</label>
                <textarea placeholder="Add a personal message....">

                </textarea>
            </div>

            <Button
                    style={{
                        borderRadius: "12px",
                        background: "#040F25",
                        padding: "16px",
                        fontWeight: "500",
                        fontStyle: "medium",
                        fontSize: "24px",
                        flexGrow:"1",
                        border:'0px',
                        color: "#FFFFFF",
                        width:'100%'



                    }} 
                    onClick={() => {setActiveTab(0)}} 
                >
                    Send Email
                </Button>

    </>
}