import Test1Src from "./assets/tes1.svg";
import Test2Src from "./assets/tes2.svg";
import Test3Src from "./assets/tes3.svg";


export default function TestimoniesImage(id){ 
    console.log("What is the id: ", id);

    switch (id.id){
        case 0:
            // return <img src={Test1Src} height={293} width={293} alt="testimonies" />
            return <img src={Test1Src} height={293} width={321} alt="testimonies" />

        case 1:
            return <img src={Test2Src} height={293} width={321}  alt="testimonies" />

        default:
            return <img src={Test3Src} height={293} width={321}  alt="testimonies" />
    }
}