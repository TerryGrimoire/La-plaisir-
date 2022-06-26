import React from "react";
import contact from "../assets/contact.png";

function Contact() {
  return (
    <section>
      <img
        src={contact}
        alt="telephone vintage allongé sur le sol"
        className="img_basic"
      />
      <h2 className="accueil_citation">Nous contacter</h2>
    </section>
  );
}

export default Contact;
