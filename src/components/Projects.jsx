import React from "react";

export default function Projects() {
  return (
    <>
      <hr />
      <div id="line">Voici un aperçu de mes projets</div>
      <br />

      <div className="projects-selection">
        <button className="project-button">
          <img src={""} alt="Projet 1" />
        </button>
        <button className="project-button">
          <img src={""} alt="Projet 2" />
        </button>
      </div>
    </>
  );
}
