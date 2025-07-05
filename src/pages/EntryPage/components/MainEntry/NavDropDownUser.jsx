import { useStore } from "../../../../store/modalstore";
import "./NavDropDownUser.css";

export default function NavDropDownUser({ref}){
    const toggleLogOutPop = useStore((state) => state.toggleLogOutPop)

    return <div ref={ref} className="navdropdownuser-container" name="navdropdownuser-container">
                <p>Account</p>
                <p onClick={(e) => {
                    e.stopPropagation();
                    toggleLogOutPop();
                }}>Log Out</p>
            </div>
}