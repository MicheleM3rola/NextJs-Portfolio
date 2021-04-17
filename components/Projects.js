import React, { useEffect } from "react";
import projectStyles from "../styles/project.module.css";
import CardProject from "./CardProject";
import GitHub from "./GitHub";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const titleProjectVariant = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Projects = ({ card, gitRepo }) => {
  const [ref, inView] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start(titleProjectVariant.visible);
    } else if (!inView) {
      animation.start(titleProjectVariant.hidden);
    }
  }, [inView]);

  return (
    <div className={projectStyles.ctnProject} id="projects">
      <motion.div
        className={projectStyles.project}
        animate={animation}
        ref={ref}
      >
        <h1 className={projectStyles.introTitle}>....My Projects</h1>
      </motion.div>
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
