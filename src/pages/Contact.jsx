import React from "react";
import Landing from "../components/Landing";
import landingData from "../data/landingData";

function Contact() {
  return (
    <section>
      <Landing data={landingData[3]} />
    </section>
  );
}

export default Contact;
