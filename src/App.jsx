import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Burger from "./components/Burger";
import Accueil from "./pages/Accueil";
import Carte from "./pages/Carte";
import Evenements from "./pages/Evenements";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Router>
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <Burger navOpen={navOpen} setNavOpen={setNavOpen} />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Carte" element={<Carte />} />
        <Route path="/Evenements" element={<Evenements />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
