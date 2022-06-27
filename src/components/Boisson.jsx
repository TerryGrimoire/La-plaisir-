import React from "react";

function Boisson({ data }) {
  return (
    <div className="boisson_container">
      <div className="flex_row">
        <h4>{data.nom}</h4>
        <p className="boisson_price">{data.prix}</p>
      </div>
      {data.description && <p>{data.description}</p>}
    </div>
  );
}

export default Boisson;
