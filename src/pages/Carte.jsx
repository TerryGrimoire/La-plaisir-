import React from "react";
import carte from "../assets/carte.png";

function Carte() {
  return (
    <section>
      <img
        src={carte}
        alt="bouteilles de vin et fromage sur une table"
        className="img_basic "
      />
      <h2 className="accueil_citation">La selection de La plaisir</h2>
    </section>
  );
}

export default Carte;
