import React from "react";

import BackgroundImage from "../pages/BackgroundImage";

const Header = () => {
  return (
    <>
      <div className="header">
        <p className="header__welcome">Hello !</p>
        <h1 className="header__title">I'm Lukasz Adamczyk</h1>
        <p className="header__span">Web Developer</p>
      </div>
      <BackgroundImage />
    </>
  );
};

export default Header;
