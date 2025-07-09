import "./RippleEffect.css";

export default function RippleEffect({style, children, onClick}){
    return <div className="rippleeffect-container" onClick={onClick} style={style}>
        {children}
    </div>
}