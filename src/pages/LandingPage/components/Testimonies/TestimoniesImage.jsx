import Test1Src from "./assets/tes1.svg";
import Test2Src from "./assets/tes2.svg";
import Test3Src from "./assets/tes3.svg";
import CustomLazyLoadImageZoomEffect from "../../../../components/CustomZoomLazyImageZoomEffect/CustomZoomLazyImageZoomEffect";


export default function TestimoniesImage({id}) {
    let UI;
    switch(id){
        case 0:
            UI = <CustomLazyLoadImageZoomEffect src={Test1Src} style={{width:'321px', height:'293px'}} />
            break;
        
        case 1:
            UI = <CustomLazyLoadImageZoomEffect src={Test2Src} style={{width:'321px', height:'293px'}} />
            break;

        default:
            UI = <CustomLazyLoadImageZoomEffect src={Test3Src} style={{width:'321px', height:'293px'}} />
            break;
    }
    return <>{UI}</>
}