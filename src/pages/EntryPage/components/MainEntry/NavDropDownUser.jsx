import RippleEffectDropDown from "../../../../components/RippleEffectDropDown/RippleEffectDropDown";
import { useStore } from "../../../../store/modalstore";
import "./NavDropDownUser.css";

export default function NavDropDownUser({ref}){
    const toggleLogOutPop = useStore((state) => state.toggleLogOutPop)

    return <div ref={ref} className="navdropdownuser-container" name="navdropdownuser-container">
                <RippleEffectDropDown>
                    <p onClick={(e) => {
                        e.stopPropagation();
                    }}>Account</p>

                </RippleEffectDropDown>
                <RippleEffectDropDown>
                    <p onClick={(e) => {
                        e.stopPropagation();
                        toggleLogOutPop();
                    }}>Log Out</p>
                </RippleEffectDropDown>
            </div>
}