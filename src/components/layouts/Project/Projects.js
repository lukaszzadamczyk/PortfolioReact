import React from "react";

import Project from "./Project";

import Event1 from "../../../assets/img/app/app4.png";
import First1 from "../../../assets/img/first/first4.png";
import Background1 from "../../../assets/img/background/back4.png";
import One1 from "../../../assets/img/one/one4.png";

const data = [
  {
    id: 0,
    name: "Event Form",
    date: "30.08.2020",
    description:
      "The application is to help us create an event, you can name the event, describe it, and specify whether the event will be paid or unpaid. After that, you can send the form. Application created with React, JS, CSS and HTML",
    img: Event1,
    link: "https://github.com/lukaszzadamczyk/advancedFormReact",
  },
  {
    id: 1,
    name: "First Page",
    date: "31.03.2020",
    description:
      "This was my first project, I created my first website which was supposed to be my home page. I was proud of this project, now I can see that this was nothing to be proud of... :D. Application created with CSS and HTML",
    img: First1,
    link: "https://github.com/lukaszzadamczyk/Visit-Page",
  },
  {
    id: 2,
    name: "Backgroung-animation",
    date: "16.10.2020",
    description:
      "Background animation design that moves when you move the mouse. Very nice background animation effect. Good for use with websites or app. Application created with JS, CSS and HTML",
    img: Background1,
    link: "https://github.com/lukaszzadamczyk/Background-animation",
  },
  {
    id: 3,
    name: "One hand bandit",
    date: "10.10.2020",
    description:
      "A very simple game that I created for learn new things. The game consists in selecting 3 colors that will give you a win. App created with JS, CSS and HTML",
    img: One1,
    link: "https://github.com/lukaszzadamczyk/Game-One-armed-bandit",
  },
];

const Projects = () => {
  const projects = data.map((project) => (
    <Project
      key={project.id}
      name={project.name}
      date={project.date}
      description={project.description}
      img={project.img}
      link={project.link}
    />
  ));

  return (
    <section id="fourth" className="projects">
      <h3 className="projects__title">My Projects</h3>
      {projects}
    </section>
  );
};

export default Projects;
