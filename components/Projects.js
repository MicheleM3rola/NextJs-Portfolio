import React from "react";
import projectStyles from "../styles/project.module.css";
import CardProject from "./CardProject";
import GitHub from "./GitHub";

const Projects = ({ card, gitRepo }) => {
  return (
    <div className={projectStyles.ctnProject} id="projects">
      <div className={projectStyles.project}>
        <h1 className={projectStyles.introTitle}>....My Projects</h1>
      </div>
      <div className={projectStyles.ctnDisplayCards}>
        {card.map((cardData, id) => (
          <CardProject key={id} cardData={cardData} />
        ))}
      </div>
      <h1 className={projectStyles.githubTitle}>More Projects on GitHub</h1>
      <div>
        <GitHub dataRepo={gitRepo} />
      </div>
    </div>
  );
};

export default Projects;
