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
            <li>Accueil</li>
          </Link>
          <Link to="/Carte">
            <li>Carte</li>
          </Link>
          <Link to="/Evenements">
            <li>Evenements</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </button>
  );
}

export default Nav;
