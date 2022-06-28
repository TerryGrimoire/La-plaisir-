import React, { useState, useEffect } from "react";
import papa from "papaparse";
import Landing from "../components/Landing";
import landingData from "../data/landingData";

function Evenements() {
  const [events, setEvents] = useState([]);

  const prepareData = (data) => {
    let obj = {};
    const json = data.map((line, index) => {
      if (index > 0) {
        data[0].forEach((key, j) => {
          obj = { ...obj, [key]: line[j] };
        });
      }
      return obj;
    });

    json.shift();
    setEvents(json);
  };

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSszTPthaRoWYvKge2QdGfM7pLMkdFg7npbKeyirTx6ViDwSW2Wju35I3Q60z-oqugoS4B2dzZQNIc2/pub?output=csv"
    )
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);

  return (
    <div>
      <section>
        <Landing data={landingData[2]} />
      </section>
      <div className="main_container">
        {events.length > 0 &&
          events.map((element) => (
            <div className="event_container">
              <h4>{element.nom}</h4>
              <img
                src={element.image}
                alt={element.nom}
                className="img_basic border_radius"
              />
              <p>{element.date}</p>
              <a href={element.lien} target="_blank" rel="noreferrer">
                <button type="button" className="button">
                  lien vers l'évènement
                </button>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Evenements;
