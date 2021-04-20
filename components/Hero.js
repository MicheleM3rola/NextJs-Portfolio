import React from "react";
import heroStyles from "../styles/hero.module.css";
import Link from "next/link";
import Image from "next/image";
import Arrow from "./arrow";
import { useMediaQuery } from "react-responsive";
import { social } from "../utils";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 2,
    },
  },
};

const titleDescVariant = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2 },
  },
};

const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 767px)",
  });

  return (
    <div className={heroStyles.ctn} id="home">
      <section className={heroStyles.desc}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariant}
          className={heroStyles.picture}
        >
          {isMobile ? (
            <Image
              src="/Mike3.jpg"
              alt="Picture of the author"
              width={280}
              height={280}
            />
          ) : (
            <Image
              src="/Mike3.jpg"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleDescVariant}
          className={heroStyles.innerDesc}
        >
          <h1>Michele </h1>
          <p>
            Hi Folks Welcome to my Portfolio, My name is Michele and I am a
            self-taught Front-End developer specialized in React and Next.js.
          </p>
          <span className={heroStyles.readMore}>
            <Link href="#about">
              <a href="#about">Read More..</a>
            </Link>
          </span>
          <div className={heroStyles.social}>
            {!isMobile
              ? social.map((icon, index) => (
                  <motion.a
                    whileHover={{
                      scale: 1.1,
                    }}
                    key={index}
                    href={icon.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: `${icon.color}` }}
                    className={
                      icon.name === "Github"
                        ? heroStyles.github
                        : heroStyles.iconSocial
                    }
                  >
                    {icon.icon}
                  </motion.a>
                ))
              : null}
          </div>
        </motion.div>
      </section>
      <Arrow />
    </div>
  );
};

export default Hero;
