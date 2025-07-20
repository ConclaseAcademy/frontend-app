import "./InputControl.css";

export default function InputControl({type, label, name, value, placeholder, onChange,checked, error, style}){
    switch(type){
        case "email":
            return <div className="inputcontrol-email">
                <label htmlFor={name}>{label}<span style={{color:'red'}}>*</span></label>
                <input className={error?"input-error":""}
                    style={style} type={type} 
                    name={name} placeholder={placeholder} 
                    onChange={onChange} value={value}
                     />
                {error && <div className="input-toptip">
                        {error}
                        <span className="input-tooltip-arrow"></span>
                    </div>}
            </div>

        case "password":
            return <div className="inputcontrol-password">
                <label htmlFor={name}>{label}<span style={{color:'red'}}>*</span></label>
                <input style={style}  type={type} name={name} 
                placeholder={placeholder} onChange={onChange}
                className={error?"input-error":""}
                value={value} />
                {error && <div className="input-toptip">
                        {error}
                        <span className="input-tooltip-arrow"></span>
                    </div>}
            </div>

        case "text":
            return <div className="inputcontrol-name">
                <label htmlFor={name}>{label}<span style={{color:'red'}}>*</span></label>
                <input style={style}  type={type} 
                name={name} placeholder={placeholder} 
                onChange={onChange} value={value}
                className={error?"input-error":""}/>
                {error && <div className="input-toptip">
                        {error}
                        <span className="input-tooltip-arrow"></span>
                    </div>}
            </div>

        case "term":
            return <div className="inputcontrol-switch">
                <div>
                    <input style={style}  type="checkbox" 
                    name={name}  onChange={onChange}
                    value={value}
                    checked={checked}
                    className={error?"input-error":""}/>
                    {error && <div className="input-toptip">
                            {error}
                            switch
                            <span className="input-tooltip-arrow"></span>
                        </div>}
                    <label htmlFor={name}>{label}</label>
                </div>
                <span>{placeholder}</span>
            </div>

        default:
            return <div className="inputcontrol-checkbox">
                    <input style={style}  type="checkbox" 
                    name={name}  onChange={onChange} 
                    value={value}
                    className={error?"input-error":""}/>
                    {error && <div className="input-toptip">
                            {error}
                            checkbox
                            <span className="input-tooltip-arrow"></span>
                        </div>}
                    <label htmlFor={name}>{label}</label>
            </div>
    }
}