import React from "react";
import heroStyles from "../styles/hero.module.css";
import Link from "next/link";
import Image from "next/image";
import Arrow from "./arrow";
import { useMediaQuery } from "react-responsive";
import { social } from "../utils";
import { motion } from "framer-motion";

const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 767px)",
  });

  return (
    <div className={heroStyles.ctn} id="home">
      <section className={heroStyles.desc}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
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

        <div className={heroStyles.innerDesc}>
          <h1>Michele </h1>
          <p>
            Hi Folks Welcome to my Portfolio, My name is Michele and I am a
            Front-End developer specialized in React and Next.js. It's been 3
            years since I started coding and I would love to jump in the
            industry.
          </p>
          <span className={heroStyles.readMore}>
            <Link href="#about">
              <a href="#about">Read More..</a>
            </Link>
          </span>
          <div className={heroStyles.social}>
            {!isMobile
              ? social.map((icon, index) => (
                  <a
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
                  </a>
                ))
              : null}
          </div>
        </div>
      </section>
      <Arrow />
    </div>
  );
};

export default Hero;
