import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Links() {
  return (
    <div className="links">
      <a
        href="mailto:belkessa0102@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} className="link-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/sofiane-belkessa-a030952b3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="link-icon" />
      </a>
      <a
        href="https://github.com/SofianeBel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="link-icon" />
      </a>
    </div>
  );
}
