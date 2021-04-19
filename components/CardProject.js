import projectStyles from "../styles/project.module.css";
import BlockContent from "@sanity/block-content-to-react";
import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const ProjectCardVariant = {
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

const CardProject = ({ cardData }) => {
  const animation = useAnimation();

  return (
    <InView>
      {({ inView, ref, entry }) => {
        if (inView) {
          animation.start(ProjectCardVariant.visible);
        } else if (!inView) {
          animation.start(ProjectCardVariant.hidden);
        }
        return (
          <motion.div
            animate={animation}
            ref={ref}
            className={projectStyles.ctnCard}
          >
            <section className={projectStyles.ctnImgSkills}>
              <div
                className={projectStyles.imgProjects}
                style={{
                  backgroundImage: `url(${cardData.mainImage.asset.url})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/*  <img
            className={projectStyles.imgSinglePro}
            src={cardData.mainImage.asset.url}
            alt="Project-Image"
          />*/}
              </div>
              <div className={projectStyles.techProjects}>
                {cardData.tech.map((skillImg, id) => (
                  <img
                    src={skillImg.mainImage.asset.url}
                    key={id._id}
                    alt="skills"
                    className={projectStyles.skillsImgSide}
                  />
                ))}
              </div>
            </section>
            <section className={projectStyles.ctnDesc}>
              <div className={projectStyles.innerDesc}>
                <h2>{cardData.title}</h2>
                <BlockContent blocks={cardData.body} />
              </div>
              <div className={projectStyles.btnCallAction}>
                <a
                  href={cardData.repo}
                  target="_blank"
                  rel="norefferer"
                  className={projectStyles.BtnCall}
                >
                  GitHub
                </a>
                <a
                  href={cardData.demo}
                  target="_blank"
                  rel="norefferer"
                  className={projectStyles.BtnCall}
                >
                  Demo
                </a>
              </div>
            </section>
          </motion.div>
        );
      }}
    </InView>
  );
};

export default CardProject;
