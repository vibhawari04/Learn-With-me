import React, { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const descrition = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHanadler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image" />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="price">₹{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {descrition}
          <span onClick={readmoreHanadler} className="read-more">
            {readmore ? ` show less` : `read more`}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
