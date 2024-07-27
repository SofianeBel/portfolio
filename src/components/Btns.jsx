import { Container } from "react-bootstrap";
import { useState } from "react";
import Projects from "./Projects";
// import Skills from "./Skills";
// import Experience from "./Experience";

export default function Btns() {
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const handleAddProject = () => {
    setShowProjects(!showProjects);
  };

  const handleAddSkill = () => {
    setShowSkills(!showSkills);
  };

  const handleAddExperience = () => {
    setShowExperience(!showExperience);
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
      {showProjects && <Projects />}
      {/* {showSkills && <Skills />}
      {showExperience && <Experience />} */}
    </div>
  );
}
