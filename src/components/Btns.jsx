import { Container } from "react-bootstrap";

export default function Btns() {
  const handleAddProject = () => {
    // Logique pour ajouter un projet
    console.log("Ajout d'un projet");
  };

  const handleAddSkill = () => {
    // Logique pour ajouter une compétence
    console.log("Ajout d'une compétence");
  };

  const handleAddExperience = () => {
    // Logique pour ajouter une expérience
    console.log("Ajout d'une expérience");
  };

  return (
    <div className="btns">
      <button
        className="projects-btns"
        id="projects"
        onClick={handleAddProject}
      >
        Projets
      </button>
      <button className="skills-btns" id="skills" onClick={handleAddSkill}>
        Qualités
      </button>
      <button
        className="exp-btns"
        id="experience"
        onClick={handleAddExperience}
      >
        Experiences
      </button>
    </div>
  );
}
