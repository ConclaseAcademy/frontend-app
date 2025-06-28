import "./InputControl.css";

export default function InputControl({type, label, placeholder, style}){
    switch(type){
        case "email":
            return <div className="inputcontrol-email">
                <label>{label}<span style={{color:'red'}}>*</span></label>
                <input style={style} type={type} name={label} placeholder={placeholder} />
            </div>

        case "password":
            return <div className="inputcontrol-password">
                <label>{label}<span style={{color:'red'}}>*</span></label>
                <input style={style}  type={type} name={label} placeholder={placeholder} />
            </div>

        case "text":
            return <div className="inputcontrol-name">
                <label>{label}<span style={{color:'red'}}>*</span></label>
                <input style={style}  type={type} name={label} placeholder={placeholder} />
            </div>

        case "switch":
            return <div className="inputcontrol-switch">
                <div>
                    <input style={style}  type="checkbox" name={label} />
                    <label>{label}</label>
                </div>
                <span>{placeholder}</span>
            </div>

        default:
            return <div className="inputcontrol-checkbox">
                    <input style={style}  type="checkbox" name={label} />
                    <label>{label}</label>
            </div>
    }
}