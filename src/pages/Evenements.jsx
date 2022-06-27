import React from "react";
import Landing from "../components/Landing";
import landingData from "../data/landingData";

function Evenements() {
  return (
    <section>
      <Landing data={landingData[2]} />
    </section>
  );
}

export default Evenements;
