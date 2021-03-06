import React from "react";

import AboutImg from "../../../assets/svg/Info-Button.svg";

const About = () => {
  return (
    <>
      <section id="second" className="about">
        <div className="about__info">
          <img
            className="about__img"
            src={AboutImg}
            alt="Icon made by Pixel perfect from www.flaticon.com"
          />
          <h2 className="about__title">About Me</h2>
          <p className="about__text">
            Hi there, My name is Lukasz, I am 28 years old and I live in UK. I
            am an <span className="about__span"> ambitious person</span>, which
            always happy to learn a new things and improve my quali cations.
            Working under pressure is not stressful for me, I am also not afraid
            of any challenges. On a personal level, I am organized and precise
            in my work. I have strong communications skills.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
