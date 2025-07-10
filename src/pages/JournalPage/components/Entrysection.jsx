import { BsSquare, BsSquareFill, BsStar } from "react-icons/bs";
import "./Entrysection.css";
import { FaSquare } from "react-icons/fa";
import { useState } from "react";
import NoEntries from "./NoEntries";

export default function EntrySection() {
  const [entries,setEntries] = useState(0)
  return (
    <>
    {entries < 1 ?  (
<NoEntries/>
    ):(
      <>
         <div className="entry">
      <div className="entry-top">
        <h1 className="entry-header">
          <div className="box"></div> <p className="small">ENTRY</p>
        </h1>

        <select className="entry-select" name="" id="">
          <option value="">Date Created</option>=
        </select>
      </div>

      <div className="entry-bottom">
        <ul>
          <li className="entry-items">
            <div>
              <h1 className="entry-header">
                <div className="box"></div> <p className="small">Why am writing</p>
              </h1>
            </div>

            <div>
              <p className="date-entry">
                {" "}
                <BsStar /> fri 27/6/2025 2:39pm
              </p>
            </div>
          </li>
        </ul>
        <p style={{ marginLeft: "85px" }}>
          Not sure where to start? Take a few minutes...
        </p>
      </div>
    </div>
      
      </>
    )}
    
 
    </>
  );
}
