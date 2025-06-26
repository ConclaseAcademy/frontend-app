import Test1Src from "./assets/tes 1.svg";
import Test2Src from "./assets/tes 2.svg";
import Test3Src from "./assets/tes 3.svg";


export default function TestimoniesImage(id){ 
    console.log("What is the id: ", id);

    switch (id.id){
        case 0:
            return <img src={Test1Src} height={293} width={201} alt="testimonies" />

        case 1:
            return <img src={Test2Src} height={293} width={201}  alt="testimonies" />

        default:
            return <img src={Test3Src} height={293} width={201}  alt="testimonies" />
    }
}