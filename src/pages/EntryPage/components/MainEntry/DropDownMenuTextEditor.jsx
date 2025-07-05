import "./DropDownMenuTextEditor.css";
import DeleteSrc from "../../assets/deletedropdown.svg";
import UploadSrc from "../../assets/uploaddropdown.svg";
import ShareSrc from "../../assets/sharedropdown.svg";
import { useStore } from "../../../../store/modalstore";

export default function DropDownMenuTextEditor({ref}){
    const toggleDeleteEntryPop = useStore((state) => state.toggleDeleteEntryPop);
    const toggleShareEntryPop = useStore((state) => state.toggleShareEntryPop);

    return  <div ref={ref} className="dropdownmenutexteditor-container">
                <div style={{display:'flex', flexDirection:'row', 
                    columnGap:'8px', cursor:'pointer'}}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    >
                    <img src={UploadSrc} height={24} width={24} />
                    <p>Export</p>
                </div>
                <div style={{display:'flex', flexDirection:'row', 
                    columnGap:'8px', cursor:'pointer'}}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleShareEntryPop()
                    }}
                    >
                    <img src={ShareSrc} height={24} width={24} />
                    <p style={{color: "#000000B2"}}>Share</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',
                     columnGap:'8px', cursor:'pointer'}}
                     onClick={(e) => {
                        e.stopPropagation();
                        toggleDeleteEntryPop()
                    }}
                     >
                    <img src={DeleteSrc} height={24} width={24} />
                    <p>Delete</p>
                </div>
            </div>
}