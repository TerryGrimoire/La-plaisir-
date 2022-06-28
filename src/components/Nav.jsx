import React from "react";
import { Link } from "react-router-dom";

function Nav({ navOpen, setNavOpen }) {
  return (
    <button
      type="button"
      onClick={() => setNavOpen(false)}
      className={navOpen ? "nav no_button" : "hidden"}
    >
      <nav>
        <ul>
          <Link to="/">
            <li>ACCUEIL</li>
          </Link>
          <Link to="/Carte">
            <li>CARTE</li>
          </Link>
          <Link to="/Evenements">
            <li>EVENEMENTS</li>
          </Link>
          <Link to="/Contact">
            <li>CONTACT</li>
          </Link>
        </ul>
      </nav>
    </button>
  );
}

export default Nav;
