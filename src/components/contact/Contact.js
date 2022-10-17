import React from "react";
import "./contact.css";

import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bqtpw5q",
      "template_pyn5m0n",
      form.current,
      "F9vom5M1qqRYCZ3Bf"
    );

    e.target.reset();
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icons" />
            <h4>Email</h4>
            {/* <h5>giridharvaibhav04@gmail.com</h5> */}
            <a href="mailto:giridharvaibhav04@gmail.com" target="blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icons" />
            <h4>Messenger</h4>
            {/* <h5>giridharvaibhav04@gmail.com</h5> */}
            <a href="mailto:giridharvaibhav04@gmail.com" target="blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icons" />
            <h4>WhatsApp</h4>
            {/* <h5>+91 9764294317</h5> */}
            <a href="http://api.whatsapp.com/send?phone" target="blank">
              Send a Message
            </a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
