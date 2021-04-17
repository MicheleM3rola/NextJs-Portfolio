import React, { useEffect } from "react";
import aboutStyles from "../styles/about.module.css";
import AboutDesc from "./AboutDesc";
import AboutSkills from "./AboutSkills";
import { about } from "../utils";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const titleAboutVariant = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const constDescVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.8 },
  },
};

const About = () => {
  const [ref, inView] = useInView();

  const animation = useAnimation();
  const descAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start(titleAboutVariant.visible);
      descAnimation.start(constDescVariant.visible);
    } else if (!inView) {
      animation.start(titleAboutVariant.hidden);
      descAnimation.start(constDescVariant.hidden);
    }
  }, [inView]);

  return (
    <div className={aboutStyles.outerAbout} id="about">
      <div className={aboutStyles.ctnAbout}>
        <motion.div animate={animation} className={aboutStyles.titleAbout}>
          <h1 ref={ref}>More..</h1>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 1,
            },
          }}
          ref={ref}
          animate={descAnimation}
          className={aboutStyles.ctnInnerAbout}
        >
          <AboutDesc desc={about} />
          <AboutSkills skillTech={about} />
        </motion.div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#040d21"
          fillOpacity="1"
          d="M0,224L1440,320L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default About;
