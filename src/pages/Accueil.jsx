import React from "react";
import Landing from "../components/Landing";
import landingData from "../data/landingData";

function Accueil() {
  return (
    <section className="relative">
      <div className="desktop">
        <h2>Version web en construction</h2>
        <p>
          En attendant, vous pouvez visiter la version mobile depuis votre
          téléphone portable
        </p>
      </div>
      <Landing data={landingData[0]} />
      <article>
        <h3> Notre histoire </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          pariatur maxime eligendi eaque, sapiente molestiae fugit beatae!
          Maxime illo corrupti minus laudantium odit blanditiis iste reiciendis
          obcaecati a, voluptates placeat, doloribus, voluptate nam sit nesciunt
          dolorem asperiores quod quae ad tempora officia aspernatur quam?
          Cumque quibusdam expedita vitae earum recusandae soluta eum. Eos
          voluptatibus voluptate minima porro repellendus exercitationem fugit
          vitae facilis eveniet inventore.
        </p>
      </article>
      <article>
        <h3> Notre objectif </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          pariatur maxime eligendi eaque, sapiente molestiae fugit beatae!
          Maxime illo corrupti minus laudantium odit blanditiis iste reiciendis
          obcaecati a, voluptates placeat, doloribus, voluptate nam sit nesciunt
          dolorem asperiores quod quae ad tempora officia aspernatur quam?
          Cumque quibusdam expedita vitae earum recusandae soluta eum. Eos
          voluptatibus voluptate minima porro repellendus exercitationem fugit
          vitae facilis eveniet inventore.
        </p>
      </article>
    </section>
  );
}

export default Accueil;
