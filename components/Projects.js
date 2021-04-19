import React from "react";
import projectStyles from "../styles/project.module.css";
import CardProject from "./CardProject";
import GitHub from "./GitHub";
import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const titleProjectVariant = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};
const gitTitleVariant = {
  hidden: {
    x: -70,

    opacity: 0,
  },
  visible: {
    x: 0,

    opacity: 1,
    transition: { duration: 1 },
  },
};
const gitLogoVariant = {
  hidden: {
    scale: 0.9,

    opacity: 0,
  },
  visible: {
    scale: 1,

    opacity: 1,
    transition: { duration: 1 },
  },
};

const Projects = ({ card, gitRepo }) => {
  const animation = useAnimation();
  const gitTitleAnimation = useAnimation();
  const gitLogoAnimation = useAnimation();

  return (
    <div className={projectStyles.ctnProject} id="projects">
      <InView>
        {({ inView, ref, entry }) => {
          if (inView) {
            animation.start(titleProjectVariant.visible);
          } else if (!inView) {
            animation.start(titleProjectVariant.hidden);
          }

          return (
            <motion.div
              className={projectStyles.project}
              animate={animation}
              ref={ref}
            >
              <h1 className={projectStyles.introTitle}>....My Projects</h1>
            </motion.div>
          );
        }}
      </InView>
      <div className={projectStyles.ctnDisplayCards}>
        {card.map((cardData, id) => (
          <CardProject key={id} cardData={cardData} />
        ))}
      </div>

      <InView>
        {({ inView, ref, entry }) => {
          if (inView) {
            gitTitleAnimation.start(gitTitleVariant.visible);
          } else if (!inView) {
            gitTitleAnimation.start(gitTitleVariant.hidden);
          }
          return (
            <motion.h1
              ref={ref}
              animate={gitTitleAnimation}
              className={projectStyles.githubTitle}
            >
              More Projects on GitHub
            </motion.h1>
          );
        }}
      </InView>

      <InView>
        {({ inView, ref, entry }) => {
          if (inView) {
            gitLogoAnimation.start(gitLogoVariant.visible);
          } else if (!inView) {
            gitLogoAnimation.start(gitLogoVariant.hidden);
          }
          return (
            <motion.div ref={ref} animate={gitLogoAnimation}>
              <GitHub dataRepo={gitRepo} />
            </motion.div>
          );
        }}
      </InView>
    </div>
  );
};

export default Projects;
