import React from "react";
import footerStyle from "../styles/footer.module.css";
import { social, contact } from "../utils";
import { InView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const titleFooterVariant = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const contact2Variant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};
const contactVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, delay: 0.6 },
  },
};

const copyVariant = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Footer = () => {
  const animation = useAnimation();
  const contact2Animation = useAnimation();
  const contactAnimation = useAnimation();
  const copyAnimation = useAnimation();

  return (
    <div className={footerStyle.ctnFooter}>
      <InView>
        {({ inView, ref, entry }) => {
          if (inView) {
            animation.start(titleFooterVariant.visible);
          } else if (!inView) {
            animation.start(titleFooterVariant.hidden);
          }
          return (
            <motion.h1
              animate={animation}
              ref={ref}
              className={footerStyle.titleFooter}
            >
              Hope to hear from you soon
            </motion.h1>
          );
        }}
      </InView>

      <section className={footerStyle.detailContact}>
        {contact.map((cont, id) => (
          <div key={id} className={footerStyle.personalContact}>
            <InView>
              {({ inView, ref, entry }) => {
                if (inView) {
                  contactAnimation.start(contactVariant.visible);
                } else if (!inView) {
                  contactAnimation.start(contactVariant.hidden);
                }
                return (
                  <motion.i
                    animate={contactAnimation}
                    ref={ref}
                    className={footerStyle.iconCont}
                    style={{ color: `${cont.color}` }}
                  >
                    {" "}
                    {cont.icon}
                  </motion.i>
                );
              }}
            </InView>
            <InView>
              {({ inView, ref, entry }) => {
                if (inView) {
                  contact2Animation.start(contact2Variant.visible);
                } else if (!inView) {
                  contact2Animation.start(contact2Variant.hidden);
                }
                return (
                  <motion.a
                    animate={contact2Animation}
                    ref={ref}
                    href={
                      cont.phone
                        ? `tel:${cont.phone}`
                        : cont.email
                        ? `mailto:${cont.email}`
                        : cont.address
                        ? cont.link
                        : null
                    }
                    className={footerStyle.Links}
                  >
                    {cont.phone
                      ? cont.phone
                      : cont.email
                      ? cont.email
                      : cont.address
                      ? cont.address
                      : null}
                  </motion.a>
                );
              }}
            </InView>
          </div>
        ))}

        {social.map((sc, id) => (
          <div key={id} className={footerStyle.socialContact}>
            <InView>
              {({ inView, ref, entry }) => {
                if (inView) {
                  contactAnimation.start(contactVariant.visible);
                } else if (!inView) {
                  contactAnimation.start(contactVariant.hidden);
                }
                return (
                  <motion.i
                    animate={contactAnimation}
                    ref={ref}
                    className={footerStyle.iconSc}
                    style={{ color: `${sc.color}` }}
                  >
                    {sc.icon}
                  </motion.i>
                );
              }}
            </InView>
            <InView>
              {({ inView, ref, entry }) => {
                if (inView) {
                  contact2Animation.start(contact2Variant.visible);
                } else if (!inView) {
                  contact2Animation.start(contact2Variant.hidden);
                }
                return (
                  <motion.a
                    animate={contact2Animation}
                    ref={ref}
                    href={sc.link}
                    className={footerStyle.Links}
                  >
                    <span>\</span>
                    {sc.nickname}
                  </motion.a>
                );
              }}
            </InView>
          </div>
        ))}
      </section>
      <InView>
        {({ inView, ref, entry }) => {
          if (inView) {
            copyAnimation.start(copyVariant.visible);
          } else if (!inView) {
            copyAnimation.start(copyVariant.hidden);
          }
          return (
            <motion.div
              animate={copyAnimation}
              ref={ref}
              className={footerStyle.copyright}
            >
              <p>Created by Michele Merola all copyright reserved 2021</p>
            </motion.div>
          );
        }}
      </InView>
    </div>
  );
};

export default Footer;
