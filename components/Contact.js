import React from "react";
import contactStyles from "../styles/contact.module.css";
import Image from "next/image";
import emailjs from "emailjs-com";

const Contact = () => {
  const userId = process.env.NEXT_PUBLIC_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_97u9men", e.target, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div className={contactStyles.ctnContact} id="contact">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
        <path fill="#040d21" d="M0,0L1440,96L1440,0L0,0Z"></path>
      </svg>
      <h1 className={contactStyles.getInTouch}>Get in touch</h1>
      <div className={contactStyles.FormContainer}>
        <form className={contactStyles.FormControll} onSubmit={sendEmail}>
          <p className={contactStyles.buzzNote}>
            Leave your Email in the Buzz and I will contact you as soon as
            possible
          </p>
          <textarea
            name="message"
            rows="8"
            className={`${contactStyles.textArea}`}
            name="message"
            placeholder=" Give me a Buzz..."
          ></textarea>

          <button type="submit" className={contactStyles.btnBuzz}>
            Buzz
          </button>
        </form>
        <div className={contactStyles.drawImg}>
          <Image src="/Connect.png" alt="Contact me" width={600} height={450} />
        </div>
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
