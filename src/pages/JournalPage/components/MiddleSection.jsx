import { FiHome } from "react-icons/fi";
import "./Middlesection.css";
import { FaSearch } from "react-icons/fa";
import { BiCloudDownload, BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router";

export default function MiddleSection() {
  const navigate = useNavigate()
  return (
    <>
      <div className="middle-wrapper">
        <div className="header">
          <div>
            <h1>Alex's Journal</h1>
          </div>
          <div className="btn-group">
            <button className="cloud-btn">
              <BiCloudDownload className="cloud" />
            </button>
            <button onClick = {() => navigate("/entry")} className="entry-btn">
              <BiPlus className="cloud-circle" />
              New Entry
            </button>
          </div>
        </div>
        <div className="info">
          <p>0 total entries | created on Fri 6/27/2025 </p>
        </div>

        <div className="wrapper-items">
          <div className="item">
            <h1 className="item-header">Select </h1>
            <select className="item-select" name="" id="">
              <option value="none">None</option>
            </select>
          </div>
          <div className="item">
            <h1 className="item-header">Since </h1>
            <select className="item-select" name="" id="">
              <option value="all-time">All time</option>
            </select>
          </div>
          <div className="item">
            <h1 className="item-header">View </h1>
            <select className="item-select" name="" id="">
              <option value="active-entries">Active Entries</option>
            </select>
          </div>

          <div>
            <div className="search-item">
              <span className="icon-item">
                <FaSearch />
              </span>
              <input
                className="search-input-item"
                placeholder="search journal"
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
