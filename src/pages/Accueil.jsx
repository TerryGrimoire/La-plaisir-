import React from "react";
import plaisir from "../assets/La_plaisir.jpg";

function Accueil() {
  return (
    <section>
      <img
        src={plaisir}
        alt="Logo de La plaisir, une statue nue avec à gauche le nom de La plaisir Bistrot queer"
        className="img_basic img_accueil"
      />
      <h2 className="accueil_citation">
        Un bistrot dans lequel l’utopie est pensable et l’idéal réalisable.
      </h2>
    </section>
  );
}

export default Accueil;
