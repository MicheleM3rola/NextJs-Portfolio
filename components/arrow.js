import React from "react";
import arrowStyles from "../styles/arrow.module.css";
import { motion } from "framer-motion";

const arrowVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 3,
    },
  },
};

const Arrow = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={arrowVariant}
      className={arrowStyles.arrow}
    >
      <span></span>
      <span></span>
      <span></span>
    </motion.div>
  );
};

export default Arrow;
