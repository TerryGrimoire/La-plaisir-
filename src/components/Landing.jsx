import React from "react";

function Landing({ data }) {
  return (
    <div className="landing_section">
      <img src={data.img} alt={data.alt} className="img_basic img_accueil" />
      <h2 className="accueil_citation">{data.title.toUpperCase()}</h2>
    </div>
  );
}

export default Landing;
