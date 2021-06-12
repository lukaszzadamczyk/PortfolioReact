import React from "react";

import SkillsImg from "../../../assets/svg/Settings-Button.svg";

const Skills = () => {
  return (
    <section id="third" className="skills">
      <div className="skills__info">
        <img
          className="skills__img"
          src={SkillsImg}
          alt="Icon made by Pixel perfect from www.flaticon.com"
        />
        <h2 className="skills__title">Skills</h2>
        <h3 className="skills__front">Front-End</h3>
        <p className="skills__text">
          HTML, CSS, SASS, SCSS, BEM, RWD, ES6+, JavaScript, TypeScript, React,
          ReactHooks, ReactRouter, Redux, Webpack
        </p>
        <h3 className="skills__front">Others</h3>
        <p className="skills__text">NPM, YARN, GIT, GitHub, GSAP, VSCode</p>
      </div>
    </section>
  );
};

export default Skills;
