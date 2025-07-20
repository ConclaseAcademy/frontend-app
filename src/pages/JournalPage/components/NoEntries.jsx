import { BiPlus } from "react-icons/bi";
import "./NoEntry.css";
import { useNavigate } from "react-router";

export default function NoEntries() {
  const navigate = useNavigate();

  
  return (
    <>
      <section className="entries-wrapper">
        <div className="items-none-info">
          <div className="info-wrapper">
            <div>
              <p>Viewing 0 items</p>
            </div>
            <div>
              <p>Reset Filters</p>
            </div>
          </div>
        </div>

        <div className="align-items">
          <h1>This Journal does not have any starred entries</h1>
          <button className="entry-btn">
            <BiPlus
              onClick={() => navigate("/entry")}
              className="cloud-circle"
            />
            New Entry
          </button>
        </div>
      </section>
    </>
  );
}
