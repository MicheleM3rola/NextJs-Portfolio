import React, { useState } from "react";
import contactStyles from "../styles/contact.module.css";
import Image from "next/image";
import emailjs from "emailjs-com";
import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const titleContactVariant = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const formVariant = {
  hidden: {
    x: -70,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: 0.4, type: "spring", stiffness: 150 },
  },
};

const imgVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, delay: 0.6 },
  },
};

const Contact = () => {
  const [email, setEmail] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    return setEmail(e.target.value);
  };

  const userId = process.env.NEXT_PUBLIC_USER_ID;
  const animation = useAnimation();
  const formAnimation = useAnimation();
  const imgAnimation = useAnimation();

  const sendEmail = (e) => {
    e.preventDefault();
    email
      ? emailjs.sendForm("gmail", "template_97u9men", e.target, userId).then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        )
      : setError("Please leave your Email before to send the buzz") &
        setTimeout(() => {
          setError("");
        }, 2000);
    e.target.reset();
    setEmail(null);
  };

  return (
    <div className={contactStyles.ctnContact} id="contact">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
        <path fill="#040d21" d="M0,0L1440,96L1440,0L0,0Z"></path>
      </svg>
      <InView>
        {({ inView, ref, entry }) => {
          if (inView) {
            animation.start(titleContactVariant.visible);
          } else if (!inView) {
            animation.start(titleContactVariant.hidden);
          }
          return (
            <motion.h1
              animate={animation}
              ref={ref}
              className={contactStyles.getInTouch}
            >
              Get in touch
            </motion.h1>
          );
        }}
      </InView>

      <div className={contactStyles.FormContainer}>
        <InView>
          {({ inView, ref, entry }) => {
            if (inView) {
              formAnimation.start(formVariant.visible);
            } else if (!inView) {
              formAnimation.start(formVariant.hidden);
            }
            return (
              <motion.form
                animate={formAnimation}
                ref={ref}
                className={contactStyles.FormControll}
                onSubmit={sendEmail}
              >
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={contactStyles.buzzEmail}
                />
                <p className={contactStyles.buzzNote}>{error}</p>
                <textarea
                  name="message"
                  rows="8"
                  className={`${contactStyles.textArea}`}
                  name="message"
                  placeholder=" Your Message..."
                ></textarea>

                <button type="submit" className={contactStyles.btnBuzz}>
                  Buzz
                </button>
              </motion.form>
            );
          }}
        </InView>
        <InView>
          {({ inView, ref, entry }) => {
            if (inView) {
              imgAnimation.start(imgVariant.visible);
            } else if (!inView) {
              imgAnimation.start(imgVariant.hidden);
            }
            return (
              <motion.div
                animate={imgAnimation}
                ref={ref}
                className={contactStyles.drawImg}
              >
                <Image
                  src="/Connect.png"
                  alt="Contact me"
                  width={600}
                  height={450}
                />
              </motion.div>
            );
          }}
        </InView>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="orange" d="M0,128L1440,320L1440,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default Contact;

//serviceid:gmail
//templateid: template_97u9men
