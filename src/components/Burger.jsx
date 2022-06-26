import React from "react";
import burger from "../assets/burger.png";

function Burger({ navOpen, setNavOpen }) {
  return (
    <button
      type="button"
      onClick={() => setNavOpen(true)}
      className={navOpen ? "hidden" : "img_burger no_button"}
    >
      <img
        src={burger}
        alt="3 barres qui font office de menu sur lequel il faut cliquer pour ouvrir les liens de navigation"
      />
    </button>
  );
}

export default Burger;
