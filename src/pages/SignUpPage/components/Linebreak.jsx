export default function Linebreak(){
    return  <div 
    style={{
        display:'flex', flexDirection:'row', 
        alignItems:'center', columnGap:'10px', 
        marginBottom:"12px"}}>
                <span style={{border:"1px solid #0000001A", flexGrow:'1'}}></span>
                <span style={{color:"#0000004D", fontWeight: "400", fontSize: "16px"}}>or</span>
                <span style={{border:"1px solid #0000001A", flexGrow:'1'}}></span>
            </div>
}