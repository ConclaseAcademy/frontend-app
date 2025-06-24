import "./Button.css"

export default function Button({children, onClick, style }){
    return <button className="btn-container" style={style} onClick={onClick}>
        {children}
    </button>
}