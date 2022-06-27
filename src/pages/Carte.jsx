import React, { useState } from "react";
import Landing from "../components/Landing";
import Boisson from "../components/Boisson";

import landingData from "../data/landingData";
import carteData from "../data/carteData";

function Carte() {
  const [type, setType] = useState("Cocktails");

  return (
    <div>
      <section>
        <Landing data={landingData[1]} />
      </section>

      <section className="main_container">
        <div className="boissons_container">
          <button type="button" onClick={() => setType("Cocktails")}>
            Cocktails
          </button>
          <button type="button" onClick={() => setType("Mocktails")}>
            Mocktails
          </button>
          <button type="button" onClick={() => setType("Bières")}>
            Nos Bières
          </button>
          <button type="button" onClick={() => setType("Vin")}>
            Nos Vins
          </button>
          <button type="button" onClick={() => setType("Soft maison")}>
            Soft maison
          </button>
          <button type="button" onClick={() => setType("Soft")}>
            Autre Soft
          </button>
          <button
            type="button"
            onClick={() => setType("Boissons chaudes")}
            className="dernier_boutton"
          >
            Boissons Chaudes
          </button>
        </div>

        {carteData
          .filter((el) => el.type === type)
          .map((data) => (
            <Boisson data={data} />
          ))}
      </section>
    </div>
  );
}

export default Carte;
