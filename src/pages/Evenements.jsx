import React from "react";
import evenements from "../assets/evenements.png";

function Evenements() {
  return (
    <section>
      <img
        src={evenements}
        alt="Dj super classe et vintage qui mixte"
        className="img_basic "
      />
      <h2 className="accueil_citation">Nos évènements</h2>
    </section>
  );
}

export default Evenements;
