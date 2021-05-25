import React from "react";

const Project = ({ name, date, description, img, link }) => {
  return (
    <div className="project">
      <div className="project__img">
        <img
          className="project__picture"
          src={img}
          alt="Project Event"
          loading="lazy"
        />
      </div>
      <div className="project__description">
        <h3 className="project__title">{name}</h3>
        <h4 className="project__created">{date}</h4>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project__live"
        >
          Code
        </a>
        <p className="project__text">{description}</p>
      </div>
    </div>
  );
};

export default Project;
