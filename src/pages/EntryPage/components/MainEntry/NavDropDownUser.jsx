import { useStore } from "../../../../store/modalstore";
import "./NavDropDownUser.css";

export default function NavDropDownUser(){
    const toggleLogOutPop = useStore((state) => state.toggleLogOutPop)

    return <div className="navdropdownuser-container">
                <p>Account</p>
                <p onClick={() => {
                    toggleLogOutPop();
                }}>Log Out</p>
            </div>
}