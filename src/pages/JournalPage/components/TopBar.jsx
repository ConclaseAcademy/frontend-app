import { FaSearch } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import Logo from '../../../assets/images/logo.svg'

export default function TopBar() {
  return (
    <>
      <div className="wrapper">
        <div className="item-1">
          <FiHome style={{ height: "4vh", width: "4vh" }} />
          <div className="search-box">
            <span className="search-icon">
              <FaSearch />
            </span>
            <input placeholder="search journal" type="search" />
          </div>
        </div>
        <div>
          <img src={Logo} alt="" srcset="" />
        </div>
        <div className="item-3">
          <div>
            {/* logo */}
         
            <img src="/images/Ellipse 33.png" alt="" srcset="" />
          </div>
          <div>
            <select
              style={{ color: "white" }}
              className="select-item"
              name=""
              id=""
            >
              <option value="Alex">Alex</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
