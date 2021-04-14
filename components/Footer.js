import React from "react";
import footerStyle from "../styles/footer.module.css";
import { social, contact } from "../utils";

const Footer = () => {
  return (
    <div className={footerStyle.ctnFooter}>
      <h1 className={footerStyle.titleFooter}>Hope to hear from you soon</h1>
      <section className={footerStyle.detailContact}>
        {contact.map((cont, id) => (
          <div key={id} className={footerStyle.personalContact}>
            <i
              className={footerStyle.iconCont}
              style={{ color: `${cont.color}` }}
            >
              {" "}
              {cont.icon}
            </i>
            <a
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
            </a>
          </div>
        ))}

        {social.map((sc, id) => (
          <div key={id} className={footerStyle.socialContact}>
            <i className={footerStyle.iconSc} style={{ color: `${sc.color}` }}>
              {sc.icon}
            </i>
            <a href={sc.link} className={footerStyle.Links}>
              <span>\</span>
              {sc.nickname}
            </a>
          </div>
        ))}
      </section>
      <div className={footerStyle.copyright}>
        <p>Created by Michele Merola all copyright reserved 2021</p>
      </div>
    </div>
  );
};

export default Footer;
