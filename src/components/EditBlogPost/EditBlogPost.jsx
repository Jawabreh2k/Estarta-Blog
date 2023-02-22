import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EditHeader.css";

function EditHeader(props) {
  const [headerChange, setHeaderChange] = useState(props.item.header);
  const [flag, setFlag] = useState(true);

  return (
    <div>
      {flag ? (
        <div className="header-wrap">
          <p>
            <Link to={`/Single/${props.item.id}`}>
              <h1 className="header">{headerChange}</h1>
            </Link>
          </p>
          <button
            onClick={() => {
              setFlag(false);
            }}
            className="edit-btn"
          >
            Edit!
          </button>
        </div>
      ) : (
        <div className="header-wrap">
          <input
            type="text"
            className="header border"
            defaultValue={headerChange}
            onChange={(e) => {
              setHeaderChange(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setFlag(true);
              setHeaderChange(props.item.header);
            }}
            className="bg-close"
          ></button>
          <button onClick={() => setFlag(true)} className="save-btn">
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default EditHeader;
