import React from "react";

export default function Projects() {
  return (
    <>
      <hr id="projects-line" />
      <div id="line" className="projects-overview">
        Voici un aperçu de mes projets
      </div>
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
