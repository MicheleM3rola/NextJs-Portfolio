import React from "react";
import aboutStyles from "../styles/about.module.css";

const AboutDesc = ({ desc }) => {
  return (
    <div className={aboutStyles.aboutDesc}>
      <h2>
        <span>Hey</span> There
      </h2>
      <p>{desc.description}</p>
    </div>
  );
};

export default AboutDesc;
