import React from "react";
import aboutStyles from "../styles/about.module.css";
import AboutDesc from "./AboutDesc";
import AboutSkills from "./AboutSkills";
import { about } from "../utils";

const About = () => {
  return (
    <div className={aboutStyles.outerAbout} id="about">
      <div className={aboutStyles.ctnAbout}>
        <div className={aboutStyles.titleAbout}>
          <h1>More..</h1>
        </div>
        <div className={aboutStyles.ctnInnerAbout}>
          <AboutDesc desc={about} />
          <AboutSkills skillTech={about} />
        </div>
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
