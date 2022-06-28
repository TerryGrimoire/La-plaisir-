import React from "react";
import Landing from "../components/Landing";
import landingData from "../data/landingData";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import email from "../assets/email.png";

function Contact() {
  return (
    <div>
      <section>
        <Landing data={landingData[3]} />
      </section>
      <div className="main_container">
        <div className="flex_space_evenly">
          <a
            href="https://www.facebook.com/LaPlaisirBistrotQueer/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="logo Facebook" />
          </a>
          <a
            href="https://www.instagram.com/laplaisir_bistrotqueer/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="logo Instagram" />
          </a>
          <a
            href="mailto:labellepoulenantes@protonmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={email} alt="logo enveloppe pour email" />
          </a>
        </div>
        <h3 className="titre_centre">Horaires</h3>
        <ol>
          <li>Lundi : Fermé</li>
          <li>Mardi : Fermé</li>
          <li>Mercredi : 17h00 - 00h00</li>
          <li>Jeudi : 17h00 - 00h00</li>
          <li>Vendredi : 17h00 - 02h00</li>
          <li>Samedi : 17h00 - 02h00</li>
          <li>Dimanche : Fermé</li>
        </ol>

        <div className="contact_container">
          <h3 className="titre_centre"> Nous trouver </h3>
          <p>
            57 Bd Victor Hugo, 44200, Nantes,
            <span className="contact_tram"> Tram Mangin, Ligne 2 | 3</span>
          </p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2198.6470826119908!2d-1.5483367509726238!3d47.201638395456285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32490453e0ba4c0f!2sLA%20PLAISIR!5e0!3m2!1sfr!2sfr!4v1656367351418!5m2!1sfr!2sfr"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="google Map La plaisir"
        />
      </div>
    </div>
  );
}

export default Contact;
