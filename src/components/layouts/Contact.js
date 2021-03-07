import React from "react";

import Form from "./Form";
import Social from "./Social";

const dateSocial = [
  {
    id: 0,
    name: "email",
    icon: <span className="far fa-envelope"></span>,
    link: "mailto:lukaszz.adamczyk@gmail.com",
    text: "lukaszz.adamczyk@gmail.com",
  },
  {
    id: 1,
    name: "facebook",
    icon: <span className="fab fa-facebook"></span>,
    link: "https://www.facebook.com/xlancer92x/",
    text: "Give me a feedback on Facebook",
  },
  {
    id: 2,
    name: "github",
    icon: <span className="fab fa-github-square"></span>,
    link: "https://github.com/lukaszzadamczyk",
    text: "Take a look at my code",
  },
  {
    id: 3,
    name: "linkedin",
    icon: <span className="fab fa-linkedin"></span>,
    link: "https://www.linkedin.com/in/%C5%82ukasz-adamczyk-6ba7021b6/",
    text: "Connect on LinkedIn",
  },
];

const Contact = () => {
  const socials = dateSocial.map((social) => (
    <Social
      key={social.id}
      icon={social.icon}
      link={social.link}
      text={social.text}
    />
  ));

  return (
    <section id="fifth" className="contact">
      <h3 className="contact__title">Contact</h3>
      <p className="contact__question">
        If you have any question, please contact me !
      </p>
      <div className="contact__form-wrap">
        <Form />
      </div>
      <div className="social">{socials}</div>
    </section>
  );
};

export default Contact;
